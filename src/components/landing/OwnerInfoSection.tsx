import { SettingProps } from "@/service/api/setting";
import { gatewayUrl } from "@/service/config/variables";
import Image from "next/image";
import { FC } from "react";
interface Props {
  ownerInfo?: SettingProps["ownerInfo"];
}
const OwnerInfoSection: FC<Props> = (props) => {
  const { ownerInfo } = props;
  return (
    <section className="lg:mt-44 mt-11 lg:flex lg:px-[7.5rem] pb-9 px-5">
      <div className="relative m-auto w-full max-w-[300px] xl:max-w-[21.3rem] sm:mx-auto lg:mx-0 h-[20.8rem]  bg-pink-primary rounded-ss-[7.5rem] rounded-ee-[7.5rem]">
        <Image
          alt=""
          className="z-40 w-fit h-96 xl:h-[28rem] xl:w-[32rem] absolute bottom-0 aspect-square object-contain "
          width={500}
          height={500}
          objectFit="contain"
          src={ownerInfo?.image ? gatewayUrl + ownerInfo?.image : ""}
        />
        <div className="pink-gradient absolute -bottom-24 left-0 lg:-left-24 w-[19rem] h-[19rem] z-10 rounded-full blur-2xl	" />
      </div>
      <div className="lg:ms-16 text-center lg:text-start">
        <svg
          width="32"
          height="52"
          className="fill-black stroke-transparent hidden lg:block"
        >
          <use href={"assets/images/icons/landing.svg#dots"}></use>
        </svg>
        <p className="text-sm font-medium text-pink-primary mt-6">
          {ownerInfo?.jobPosition}
        </p>
        <h2 className="text-[2rem] font-semibold mt-2 text-black">
          {ownerInfo?.title}{" "}
        </h2>
        <p className="z-40 text-sm font-medium mt-2 text-black">
          {ownerInfo?.description}
        </p>
      </div>
    </section>
  );
};
export default OwnerInfoSection;
