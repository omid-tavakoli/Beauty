"use client";
import { GetSiteSettingParams } from "@/service/api/setting";
import { gatewayUrl } from "@/service/config/variables";
import Image from "next/image";
import { FC } from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  comments?: GetSiteSettingParams["comments"];
}
const CustomersOpinion: FC<Props> = (props) => {
  const { comments } = props;
  return (
    <>
      {comments?.length !== 0 && (
        <section className="relative w-full mb-[3.75rem] lg:mb-[9.375rem]">
          <div className="flex items-center">
            <svg
              width="68"
              height="43"
              className="hidden lg:block fill-black stroke-transparent"
            >
              <use href={"/assets/images/icons/landing.svg#dots"}></use>
            </svg>
            <div className="lg:ms-5 mx-auto">
              <h3 className="text-4xl font-bold ">نظــر مشتـریان</h3>
              <p className="text-sm opacity-50 ">
                محبت و وفاداری همیشگی مشتریان سان{" "}
              </p>
            </div>
          </div>

          <Swiper
            className="relative z-10 !pt-10 mt-14 w-full !px-5 lg:!px-[7.5rem]"
            freeMode={true}
            modules={[FreeMode, Navigation]}
            navigation={{
              nextEl: ".customers-option-navigation-next",
              prevEl: ".customers-option-navigation-prev",
              disabledClass: "disabled-swiper-navigation",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 2.1,
                spaceBetween: 8,
              },
              1024: {
                slidesPerView: 2.1,
                spaceBetween: 27,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 27,
              },
            }}
          >
            {comments?.map((comment, i) => (
              <SwiperSlide key={i}>
                <div className="relative max-w-[438px] h-[230px] lg:pb-6 rounded-3xl cursor-grab border border-card-border bg-gray-400">
                  <svg
                    height="32"
                    width="25"
                    className="fill-white absolute -top-4 right-[5.5rem] lg:right-36 z-40"
                  >
                    <use
                      href={"/assets/images/icons/landing.svg#quotation"}
                    ></use>
                  </svg>
                  <div className="flex w-full relative lg:static -top-8 left-[0.375rem]">
                    <div className="!flex-shrink-0 float-right lg:float-none relative lg:-top-8 lg:-right-2 border-4 border-white  bg-white rounded-3xl w-[81px] h-[92px] lg:w-[134px] lg:h-[152px] flex items-center justify-center">
                      <Image
                        src={
                          gatewayUrl + comment?.serviceSamplePictures?.[0] ?? ""
                        }
                        alt=""
                        className="rounded-3xl"
                        fill
                        objectFit="cover"
                        loading="eager"
                      />
                    </div>
                    <p className="relative lg:static   right-[0.375rem] text-xs leading-5 font-normal pt-12 lg:pt-8 w-full max-w-full px-[0.625rem] lg:pe-6 ps-3  text-black">
                      {comment.description}
                    </p>
                  </div>

                  <div className="flex flex-col self-end ps-[0.625rem] lg:ps-6 absolute bottom-3 lg:bottom-5 right-0">
                    <p className="text-sm leading-[1.375rem] font-semibold text-black mb-0.5">
                      {comment.userFirstName} {comment.userLastName}{" "}
                    </p>
                    <p className="text-xs leading-[1.375rem] font-medium text-black">
                      <span className="opacity-50 font-normal">نوع خدمت:</span>{" "}
                      {comment.serviceTitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute left-[7.5rem] top-8 hidden sm:flex pb-2 gap-2 flex-shrink-0">
            <Image
              className="customers-option-navigation-next cursor-pointer rotate-180"
              src={"/assets/images/icons/arrow-left.svg"}
              alt=""
              width={30}
              height={30}
            />
            <Image
              className="customers-option-navigation-prev cursor-pointer"
              src={"/assets/images/icons/arrow-left.svg"}
              alt=""
              width={30}
              height={30}
            />
          </div>
          <div className="hidden lg:block pink-gradient absolute -bottom-56 -right-10 w-[19rem] h-[19rem] rounded-full blur-3xl z-0" />
        </section>
      )}
    </>
  );
};
export default CustomersOpinion;
