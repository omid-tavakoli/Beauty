import ImageUploader from "@/components/FileUploader/FileUploader";
import Modal from "@/components/Modal";
import Button from "@/components/theme/Button";
import { useMutate } from "@/hooks/usefetch";
import { sendComment } from "@/service/api/comment";
import { GetUserReservationResponse } from "@/service/api/revervation";
import { toJalaali } from "@/service/utils/date";
import { closeModalHandler } from "@/service/utils/modalHandler";
import TextArea from "@/theme/TextArea";
import { FC, useState } from "react";
import { removeCatching } from "@/service/api/catching";
import { gatewayUrl } from "@/service/config/variables";

interface Props {
  reserve?: GetUserReservationResponse;
}
const scoreText = {
  0: "بد",
  25: "خوب",
  50: "متوسط",
  75: "عالی",
  100: "بسیارعالی",
};

const FeedbackModal: FC<Props> = (props) => {
  const { reserve } = props;

  const [score, setScore] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [description, setDescription] = useState("");

  const { mutate: postComment } = useMutate(sendComment);
  const { mutate: removeCatchingMutate } = useMutate(removeCatching);

  const saveFeedback = () => {
    postComment({
      args: {
        Description: description,
        ReservationId: reserve?.id,
        ServiceSampleFiles: images,
        Score: score,
      },
      fn: {
        onSuccess(response) {
          removeCatchingMutate({ args: "/" });
          closeModalHandler("registerComment");
        },
      },
    });
  };
  return (
    <div dir="rtl">
      <Modal
        id="registerComment"
        title="ثبت نظر"
        wrapperClassName="!max-h-none h-full sm:!max-h-[calc(100vh-1.5rem)] bg-white !rounded-none sm:!rounded-[2.25rem] !pt-3 sm:!pt-5 !p-5 w-full sm:w-[91.666667%] max-w-none sm:max-w-[34.375rem]"
      >
        <div className=" flex gap-x-16 flex-col">
          <div className="flex flex-wrap sm:flex-nowrap gap-y-4 sm:gap-y-0 gap-x-24 sm:gap-x-16 sm:justify-between bg-pink-40 p-4 mb-[1.875rem] sm:mb-5 rounded-2xl">
            <p className="w-full sm:w-36 text-sm font-normal text-black/65 mb-1">
              آرایشگر
              <span className="block text-[0.938rem] leading-5 font-medium text-black">
                {`${reserve?.personnelFirstName ?? ""} ${
                  reserve?.personnelLastName ?? ""
                }`}
              </span>
            </p>
            <p className="text-sm font-normal text-black/65 mb-1">
              نوع خدمت
              <span className="block text-[0.938rem] leading-5 font-medium text-black">
                {reserve?.fields[0]?.serviceTitle}
              </span>
            </p>
            <p className="text-sm font-normal text-black/65 mb-1">
              در تاریخ
              <span className="block text-[0.938rem] leading-5 font-medium text-black">
                {reserve?.createDate ? toJalaali(reserve.createDate).date : ""}
              </span>
            </p>
          </div>
          <p className="text-base leading-[1.625rem] font-semibold text-black mb-1">
            گذاشتن نمونه کار
          </p>
          <span className="text-[0.938rem] leading-[1.625rem] font-medium text-black mb-[0.375rem]">
            حداکثر5 عکس 5 مگابایت و 3 ویدئو با فرمت mp4 تا 100 مگابایت
          </span>
          <div className="flex items-end flex-wrap  gap-4 relative">
            <ImageUploader
              multiFile
              disable={images.length >= 5}
              fileHandler={(res) => {
                setImages((pre) => [...pre, res ?? ""]);
              }}
            />
            {images?.map((img) => (
              <div className="relative">
                <div
                  className="absolute  top-0 right-0 !z-[1000] pt-2 ps-2"
                  onClick={() =>
                    setImages((pre) =>
                      pre.filter((preImage) => preImage !== img)
                    )
                  }
                >
                  <span className="flex items-center justify-center bg-main-secondary w-9 h-9 rounded-lg cursor-pointer">
                    <svg width="20" height="20">
                      <use
                        href={"/assets/images/icons/reservation.svg#delete"}
                      ></use>
                    </svg>
                  </span>
                </div>
                <img
                  src={gatewayUrl + img}
                  className="!w-[5.5rem] rounded-xl !h-[5.5rem] object-cover"
                  alt="user-img"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center my-4">
            <p className="text-base leading-[1.625rem] font-semibold text-black">
              به کار ما چه امتیازی می‌دهید؟
            </p>
            <p className="text-[0.813rem] leading-[1.006rem] font-normal text-black">
              امتیاز شما:
              <span className="text-[1.125rem] leading-[1.393rem] font-normal text-black ms-2">
                {
                  //@ts-ignore
                  scoreText[score.toString()]
                }
                !
              </span>
            </p>
          </div>
          <input
            value={score}
            type="range"
            // id="rangeInput"
            name="rangeInput"
            step="25"
            onChange={(e) => setScore(+e.target.value)}
          />
          <div className="flex items-center justify-between mt-4 sm:mt-2  mb-[1.875rem] sm:mb-6">
            <div className="flex flex-col items-center text-[0.813rem] leading-[1.006rem] text-black font-normal">
              بد
              <div className="flex items-start gap-x-0.5 mt-3">
                <svg width="14" height="14">
                  <use href={"/assets/images/icons/userAccount.svg#star"}></use>
                </svg>
                <span className="text-[0.813rem] leading-[1.006rem] text-black font-normal">
                  1
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center text-[0.813rem] leading-[1.006rem] text-black font-normal">
              خوب
              <div className="flex items-start gap-x-0.5 mt-3">
                <svg width="14" height="14">
                  <use href={"/assets/images/icons/userAccount.svg#star"}></use>
                </svg>
                <span className="text-[0.813rem] leading-[1.006rem] text-black font-normal">
                  2
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center text-[0.813rem] leading-[1.006rem] text-black font-normal">
              متوسط
              <div className="flex items-start gap-x-0.5 mt-3">
                <svg width="14" height="14">
                  <use href={"/assets/images/icons/userAccount.svg#star"}></use>
                </svg>
                <span className="text-[0.813rem] leading-[1.006rem] text-black font-normal">
                  3
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center text-[0.813rem] leading-[1.006rem] text-black font-normal">
              عالی
              <div className="flex items-start gap-x-0.5 mt-3">
                <svg width="14" height="14">
                  <use href={"/assets/images/icons/userAccount.svg#star"}></use>
                </svg>
                <span className="text-[0.813rem] leading-[1.006rem] text-black font-normal">
                  4
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center text-[0.813rem] leading-[1.006rem] text-black font-normal">
              بسیارعالی
              <div className="flex items-start gap-x-0.5 mt-3">
                <svg width="14" height="14">
                  <use href={"/assets/images/icons/userAccount.svg#star"}></use>
                </svg>
                <span className="text-[0.813rem] leading-[1.006rem] text-black font-normal">
                  5
                </span>
              </div>
            </div>
          </div>
          <TextArea
            inputProps={{
              className: "!h-[7.188rem] sm:!h-[8.125rem]",
              value: description,
              onChange: (e) => setDescription(e.target.value),
            }}
            labelClassName="!leading-[1.5rem] font-semibold"
            wrapperClassName="mb-[3.75rem] sm:mb-5"
            label="نظر خودت را  درمورد کار زیبایی که در مجموعه ما انجام دادی بهمون بگو"
          />
          <Button
            onClick={saveFeedback}
            className="button-primary w-full sm:w-fit ms-auto"
          >
            ثبت نظر
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default FeedbackModal;
