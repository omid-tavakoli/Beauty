import { SettingProps } from "@/service/api/setting";
import { gatewayUrl } from "@/service/config/variables";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
interface Props {
  IntroSection: SettingProps["introduction"];
}
const IntroSection: FC<Props> = (props) => {
  const { IntroSection } = props;
  return (
    <section className="flex flex-col lg:flex-row max-w-beauty px-5 beauty:px-0 mx-auto mt-10 lg:mt-24 lg:justify-between">
      <div className="lg:w-2/5 w-full order-2 lg:order-1 mt-5 lg:mt-0">
        <h1 className="font-semibold text-center lg:text-start text-[30px] ps-2 lg:text-[2.5rem] mt-2 lg:mt-5 text-black">
          {IntroSection?.title}
        </h1>
        <p className="font-medium text-sm w-full lg:text-base ps-2 text-center lg:text-start mt-3 text-black">
          {IntroSection?.description}
        </p>
        <div className="flex items-center mt-6 lg:mt-11 gap-2 ps-2 w-full max-w-80 mx-auto lg:max-w-beauty lg:mx-0  ">
          <Link
            href={"/reservation/branches"}
            className="h-10 w-full lg:w-[6.25rem] flex items-center justify-center text-white text-sm rounded-3xl bg-pink-primary"
          >
            رزرو آنلاین
          </Link>
          <Link
            href={"/services"}
            className="h-10 w-full lg:w-[7.6rem] flex items-center lg:font-medium font-bold justify-center text-sm text-black rounded-3xl border border-gray-100 bg-white"
          >
            مشاهده خدمات
          </Link>
        </div>
        <p className="lg:mt-20 mt-8 text-sm text-blak">
          برای مشاهده نمونه‌کارها و احوالات {IntroSection?.instaTitle} مارا در اینستاگرام همراهی
          کنید
        </p>
        <div className="flex items-center lg:mt-4 lg:my-0 my-2 ms-5">
          <div className="relative w-14 h-14 instagram-gradient rounded-full flex items-center justify-center overflow-hidden ">
            <div className="flex items-center justify-center w-[3.375rem] h-[3.375rem] bg-cream rounded-full text-[0.6rem]">
              Beauty
            </div>
          </div>
          <div className="ms-3  ">
            <p className="text-sm font-semibold ">{IntroSection?.instaTitle}</p>
            <p className="text-xs">
              <span className="font-semibold"> 1.9M </span>
              Followers
            </p>
          </div>
        </div>
      </div>

      <div className="grid order-1 lg:order-2 justify-items-start lg:justify-items-center grid-rows-1 grid-cols-2 lg:grid-cols-2 gap-3">
        <Image
          alt=""
          className="h-[14rem] object-cover rounded-se-[6rem] rounded-es-[6rem] justify-self-end lg:justify-self-auto"
          width={232}
          height={226}
          src={IntroSection?.image1 ? gatewayUrl + IntroSection?.image1 : ""}
        />
        <Image
          alt=""
          className="h-[14rem] object-cover rounded-ee-[6rem] rounded-ss-[6rem]"
          width={232}
          height={226}
          src={IntroSection?.image2 ? gatewayUrl + IntroSection?.image2 : ""}
        />
        <Image
          alt=""
          className="hidden h-[14rem] lg:block object-cover rounded-ss-[6rem] rounded-ee-[6rem]"
          width={232}
          height={226}
          src={IntroSection?.image3 ? gatewayUrl + IntroSection?.image3 : ""}
        />
        <Image
          alt=""
          className="hidden h-[14rem] lg:block object-cover rounded-se-[6rem] rounded-es-[6rem]"
          width={232}
          height={226}
          src={IntroSection?.image4 ? gatewayUrl + IntroSection?.image4 : ""}
        />
      </div>
    </section>
  );
};

export default IntroSection;
