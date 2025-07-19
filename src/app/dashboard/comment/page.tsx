"use client";
import AccountLayout from "@/components/AccountLayout";
import { useGet } from "@/hooks/usefetch";
import { getCommentByFilter } from "@/service/api/comment";
import { gatewayUrl } from "@/service/config/variables";
import Image from "next/image";

const comment = () => {
  const { data: allComment } = useGet(
    getCommentByFilter,
    {},
    { index: 1, size: 10, GetAll: true }
  );
  return (
    <AccountLayout sectionTitle="دیدگاه ها">
      <div className="flex flex-col w-full h-full sm:h-[calc(36.188rem-5rem)] px-5 py-5  bg-white rounded-3xl border border-card-border">
        <div
          className="w-full h-full flex flex-wrap gap-x-5 gap-y-8  pt-8 custom-scrollBar  overflow-auto "
          dir="rtl"
        >
          {allComment?.entity?.map((comment) => (
            <div
              key={comment?.Id}
              className="relative w-[calc(50%-1rem)] h-44 rounded-3xl cursor-grab border border-card-border bg-white"
            >
              <svg
                height="19"
                width="16"
                className="fill-black absolute -top-4 right-36 z-40"
              >
                <use
                  href={"assets/images/icons/userAccount.svg#quotation1"}
                ></use>
              </svg>
              <div className="flex w-full static -top-8 left-[0.375rem]">
                <div className="!flex-shrink-0 relative -top-8 -right-2 border-4 border-white  bg-white rounded-3xl w-[4.938rem] h-[5.625rem] flex items-center justify-center">
                  <Image
                    src={gatewayUrl + comment?.ServiceSampleFiles?.[0]}
                    alt=""
                    className="rounded-3xl"
                    fill
                    objectFit="cover"
                    loading="eager"
                  />
                </div>
                <p className="static right-[0.375rem] text-xs leading-5 font-normal pt-8 w-full max-w-full ps-[0.625rem] pe-6  text-black">
                  {comment?.Description}
                </p>
              </div>

              <div className="flex flex-col self-end ps-6 absolute bottom-5 right-0">
                <p className="text-sm leading-[1.375rem] font-semibold text-black mb-0.5">
                  {comment?.user?.firstName}{" "}
                </p>
                <p className="text-xs leading-[1.375rem] font-medium text-black">
                  <span className="opacity-50 font-normal">نوع خدمت:</span>{" "}
                  {comment?.user?.lastName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AccountLayout>
  );
};

export default comment;
