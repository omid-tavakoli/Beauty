import Input from "@/theme/Input";
import TextArea from "@/theme/TextArea";
import Button from "../theme/Button";

const data = {
  jobTitle: "کوتاهی مو",
  line: "مو",
  service: "کوتاهی مو",
  branch: "تهرانپارس",
  hoursOfWork: "8:30 الی 22:45",
  workDay: "چهارشنبه تا پنج شنبه",
  workExperience: "1 تا 3 سال سابقه کار",
  maritalStatus: "فرقی ندارد",
  businessTrip: "دوره های آموزشی به دلخواه",
  benefits: "بیمه,کمک هزینه دوره های موزشی؛میان وعده",
  typeOfCooperation: "درصدی یا ثابت",
};
const EmploymentForm = () => {
  return (
    <div className="relative flex flex-col lg:flex-row w-full lg:h-[42.313rem] px-5 lg:px-0 ">
      <div className="order-1 lg:order-none lg:absolute lg:right-0 w-full lg:w-[calc(50%+1.25rem)] h-full bg-white p-5 sm:pe-10 rounded-tl-[2.25rem] rounded-tr-sm rounded-br-[2.25rem] rounded-bl-sm overflow-hidden">
        <div className="text-xl leading-[1.563rem] font-normal sm:text-2xl sm:leading-[1.875rem] sm:font-medium text-black mb-[3.625rem]">
          همکار ما شو
          <span className="text-[0.813rem] sm:text-sm leading-4 sm:leading-[1.063rem] font-normal text-black ms-[0.625rem]">
            (برای همکاری فرم زیر را کامل کنید)
          </span>
        </div>
        <form className="w-full h-[calc(100%-5.5rem)] flex flex-col">
          <div className="w-full grid grid-cols-2 gap-x-[3.438rem] gap-y-5 mb-[5.438rem] sm:mb-[4.25rem]">
            <Input
              label="نام *:"
              labelClassName="!text-black/65"
              inputProps={{
                id: "first-name",
                className: "!h-[2.875rem]",
              }}
            />
            <Input
              label="نام خانوادگی*:"
              labelClassName="!text-black/65"
              inputProps={{
                id: "last-name",
                className: "!h-[2.875rem]",
              }}
            />
            <Input
              label="شماره موبایل*:"
              labelClassName="!text-black/65"
              inputProps={{
                id: "phone-number",
                className: "!h-[2.875rem]",
              }}
            />
            <Input
              label="تخصص*:"
              labelClassName="!text-black/65"
              inputProps={{
                id: "expertise",
                className: "!h-[2.875rem]",
              }}
            />
            <Input
              wrapperClassName="col-span-full mt-[0.625rem]"
              label="رزومه کاری*:"
              labelClassName="!text-black/65"
              inputProps={{
                id: "resume",
                className: "!h-[2.875rem]",
              }}
            />
            <TextArea
              wrapperClassName="col-span-full"
              label="توضیحات:"
              labelClassName="!text-black/65"
              inputProps={{
                id: "description",
                className: "!h-[8.375rem]",
              }}
            />
          </div>
          <Button className="w-full sm:w-fit sm:ms-auto">ثبت رزومه</Button>
        </form>
      </div>
      <div className="hidden lg:flex absolute left-0 top-[50%] -translate-y-2/4 flex-col w-2/4 h-[34.75rem] bg-white shadow-beauty_xl p-5 rounded-tl-[2.25rem] rounded-tr-sm rounded-br-[2.25rem] rounded-bl-sm overflow-hidden">
        <div className="w-full grid grid-cols-4 gap-x-[0.938rem]">
          <div className="text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            عنوان شغلی:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.jobTitle}
            </p>
          </div>
          <div className="text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            لاین:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.line}
            </p>
          </div>
          <div className="text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            خدمت:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.service}
            </p>
          </div>
          <div className="text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            شعبه:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.branch}
            </p>
          </div>
          <span className="custom-divider col-span-full my-10" />
          <div className="text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            ساعت کاری:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.hoursOfWork}
            </p>
          </div>
          <div className="text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            روز کاری:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.workDay}
            </p>
          </div>
          <div className="text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            سابقه کاری:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.workExperience}
            </p>
          </div>
          <div className="text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            وضعیت تاهل:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.maritalStatus}
            </p>
          </div>
        </div>
        <span className="custom-divider col-span-full my-10" />
        <div className="w-full flex gap-x-10">
          <div className="w-40 text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            سفر کاری:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.businessTrip}
            </p>
          </div>
          <div className="w-40 text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            مزایا و تسهیلات:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.benefits}
            </p>
          </div>
          <div className="w-[5.313rem] text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            نوع همکاری:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.typeOfCooperation}
            </p>
          </div>
        </div>
        <div>
          <p className="text-[0.938rem] leading-[1.375rem] font-semibold text-black/65 mt-[3.5rem]">
            توصیف سالن:
          </p>
          <p className="text-sm leading-[1.625rem] font-normal text-black">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
      </div>
      <div className="lg:hidden flex flex-col w-full bg-white p-5 rounded-tl-[2.25rem] rounded-tr-sm rounded-br-[2.25rem] rounded-bl-sm overflow-hidden mb-5 sm:mb-0">
        <div className="w-full flex justify-between gap-x-10">
          <div className="w-fit text-[0.875rem] sm:text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            عنوان شغلی:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.jobTitle}
            </p>
          </div>
          <div className="w-fit mx-auto text-[0.875rem] sm:text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            لاین:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.line}
            </p>
          </div>
          <div className="w-fit text-[0.875rem] sm:text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            خدمت:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.service}
            </p>
          </div>
        </div>
        <span className="custom-divider my-[0.938em]" />
        <div className="w-full flex flex-wrap justify-between gap-x-10">
          <div className="w-fit text-[0.875rem] sm:text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            ساعت کاری:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.hoursOfWork}
            </p>
          </div>
          <div className="w-fit text-[0.875rem] sm:text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            روز کاری:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.workDay}
            </p>
          </div>
          <span className="custom-divider my-[0.938em]" />
          <div className="w-40 text-[0.875rem] sm:text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            مزایا و تسهیلات:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.benefits}
            </p>
          </div>
          <div className="w-fit text-[0.875rem] sm:text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            نوع همکاری:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.typeOfCooperation}
            </p>
          </div>
          <span className="custom-divider my-[0.938em]" />
          <div className="w-40 text-[0.875rem] sm:text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            سفر کاری:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.businessTrip}
            </p>
          </div>
          <div className="w-fit text-[0.875rem] sm:text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            شعبه:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.branch}
            </p>
          </div>
          <span className="custom-divider col-span-full my-[0.938em]" />
          <div className="w-fit text-[0.875rem] sm:text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            سابقه کاری:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.workExperience}
            </p>
          </div>
          <div className="w-fit text-[0.875rem] sm:text-[0.938rem] leading-5 font-medium text-black/65 break-words">
            وضعیت تاهل:
            <p className="leading-[1.375rem] font-semibold text-black mt-[0.938rem]">
              {data?.maritalStatus}
            </p>
          </div>
          <span className="custom-divider col-span-full my-[0.938em]" />
        </div>
      </div>
    </div>
  );
};

export default EmploymentForm;
