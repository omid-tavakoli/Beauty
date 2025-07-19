"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";

import Link from "next/link";
import { Italiana } from "next/font/google";
import { FC, useEffect, useState } from "react";
import {
  GetSiteSettingParams,
  SettingProps,
  SettingService,
} from "@/service/api/setting";
import { gatewayUrl } from "@/service/config/variables";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

interface Props {
  services?: SettingService[];
  serviceInfo?: SettingProps["service"];
  gallery: GetSiteSettingParams["serviceSamples"];
}
const ServicesSection: FC<Props> = (props) => {
  const { serviceInfo, services, gallery } = props;
  const [isPlayMovies, setIsPlayMovies] = useState(false);
  const galleryList =
    gallery?.map((img) => ({
      size: Math.floor(Math.random() * 31) + 50,
      src: img,
    })) ?? [];

  useEffect(() => {
    //@ts-ignore
    if (isPlayMovies) document.getElementById("salaon-movies")?.play();
    //@ts-ignore
    else document.getElementById("salaon-movies")?.pause();
  }, [isPlayMovies]);

  return (
    <section className="relative xl:mt-44 mt-11 pb-20 ">
      <div className="">
        <div className="relative w-fit mx-auto ">
          <h2 className="xl:text-4xl text-2xl font-semibold mx-auto">
            {serviceInfo?.title}{" "}
          </h2>
          <svg className="fill-[url(#star-gradient-svg)] absolute -top-8 xl:-left-8 -left-4  w-5 h-5 xl:w-8 xl:h-8 ">
            <use href={"/assets/images/icons/landing.svg#primary-star"}></use>
            <defs>
              <linearGradient
                id="star-gradient-svg"
                x1="16.5"
                y1="0"
                x2="16.5"
                y2="33"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.255208" stopColor="var(--secondary)" />
                <stop offset="1" stopColor="var(--primary)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p className="text-sm font-medium mt-5 text-center px-5 xl:px-0">
          {serviceInfo?.titleDes}
        </p>

        <Swiper
          className="xl:mt-14 mt-4 w-full !px-5 xl:!px-[7.5rem] h-[10.75rem]"
          freeMode={true}
          modules={[FreeMode]}
          spaceBetween={16}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {services?.map((service) => (
            <SwiperSlide className="group cursor-pointer" key={service?.id}>
              <div className="h-[8.875rem] group-hover:h-[10.75rem] p-px transition-all duration-500 bg-card-border hover:bg-gradient-to-r from-[var(--primary)] from-[1.17%] to-[--secondary] to-[99.46%] rounded-ss-[4px] rounded-es-3xl rounded-se-3xl rounded-ee-[4px] overflow-hidden">
                <div className="h-full relative py-[0.875rem] px-4 bg-white rounded-ss-[3px] rounded-es-[1.375rem] rounded-se-[1.375rem] rounded-ee-[3px]">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl  bg-[rgba(var(--primary-rgb),0.2)]">
                    <svg width="28" height="31" className=" fill-black">
                      <use
                        href={`/assets/images/icons/services.svg#${service?.icon}`}
                      ></use>
                    </svg>
                  </div>
                  <p className="text-xs font-semibold mt-2 ">
                    {service?.title}
                  </p>
                  <p className="text-sm mt-2">{service?.categoryTitle}</p>

                  <div className="absolute -right-28 bottom-4 opacity-0 group-hover:bottom-4 group-hover:right-4 group-hover:opacity-100 transition-all ease-in-out duration-[350ms] delay-200">
                    <Link
                      href={"/servicesDetails"}
                      className="text-xs leading-[1.125rem] text-pink-primary me-[0.375rem]"
                    >
                      مشاهده جزئیات
                    </Link>
                    <svg
                      width="24"
                      height="22"
                      className=" fill-none inline align-middle stroke-pink-primary"
                    >
                      <use
                        href={`/assets/images/icons/arrow-left-pink.svg#left`}
                      ></use>
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {galleryList.length >= 16 && (
          <Swiper
            className="mt-14 w-full h-[28.5rem] !px-5 cursor-grab"
            freeMode={true}
            modules={[FreeMode]}
            breakpoints={{
              0: {
                spaceBetween: 9,
              },
              1024: { spaceBetween: 12 },
            }}
            slidesPerView={"auto"}
          >
            {galleryList.splice(0, galleryList.length / 2)?.map((image, i) => {
              return (
                <SwiperSlide className="!w-auto" key={i}>
                  <div
                    className="relative w-52 mb-[0.563rem] xl:mb-3"
                    style={{ height: `${image.size}%` }}
                  >
                    <Image
                      src={gatewayUrl + image?.src}
                      alt=""
                      className="rounded-[1.8rem] object-cover"
                      fill
                      loading="eager"
                    />
                  </div>
                  <div
                    className="relative w-52"
                    style={{ height: `${100 - image.size}%` }}
                  >
                    <Image
                      src={
                        gatewayUrl +
                          galleryList[galleryList.length - (i + 1)]?.src
                      }
                      alt=""
                      className="rounded-[1.8rem] object-cover"
                      fill
                      loading="eager"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
      <div className="relative xl:w-[85%] w-full pb-9 xl:pb-0 xl:h-[26.25rem] bg-pink-primary xl:rounded-se-[32rem] mt-[5.5rem] z-10">
        <div className="noise-background overflow-hidden xl:rounded-se-[32rem] w-full xl:h-[26.25rem] h-full  opacity-5 absolute" />
        <div className="flex flex-col xl:flex-row xl:pe-[390px] relative xl:px-[7.5rem] px-5 items-center h-full">
          <div className="relative order-3 xl:order-1 w-full xl:w-fit mt-6 xl:mt-0">
            <svg
              width="27"
              height="27"
              className="fill-[url(#blue-star-gradient-svg)] absolute -top-3 right-0 hidden xl:block"
            >
              <use href={"/assets/images/icons/landing.svg#blue-star"}></use>
              <defs>
                <linearGradient
                  id="blue-star-gradient-svg"
                  x1="13.5"
                  y1="0"
                  x2="13.5"
                  y2="27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.255208" stopColor="#B9DFEC" />
                  <stop offset="1" stopColor="#6BDCFF" />
                </linearGradient>
              </defs>
            </svg>
            <p
              className={`${italiana.className} text-white text-[2.5rem] text-center hidden xl:block `}
            >
              {serviceInfo?.name}
            </p>
            <div className="xl:w-40 w-full h-[2px] white-line-gradient-90" />
            <div className="flex items-center xl:justify-around justify-center py-2 gap-5 xl:gap-0">
              {serviceInfo?.instaLik && (
                <Link href={serviceInfo?.instaLik} target="_blank">
                  <svg width="30" height="30" className="fill-white">
                    <use
                      href={"/assets/images/icons/landing.svg#white-instagram1"}
                    ></use>
                  </svg>
                </Link>
              )}
              {serviceInfo?.whatLink && (
                <Link href={serviceInfo?.whatLink} target="_blank">
                  <svg width="30" height="30" className="fill-white">
                    <use
                      href={"/assets/images/icons/landing.svg#white-whatsapp"}
                    ></use>
                  </svg>
                </Link>
              )}
              {serviceInfo?.telLink && (
                <Link href={serviceInfo.telLink} target="_blank">
                  <svg width="30" height="30" className="fill-white">
                    <use
                      href={"/assets/images/icons/landing.svg#white-telegram"}
                    ></use>
                  </svg>
                </Link>
              )}
            </div>
            <div className="xl:w-40 w-full h-0.5 white-line-gradient-270" />
            <Link
              href={"/reservation/branches"}
              className="h-10 w-full xl:mt-10 mt-5 flex items-center justify-center text-sm font-semibold text-pink-primary xl:text-black rounded-3xl border border-gray-100 bg-white"
            >
              رزرو آنلاین
            </Link>
          </div>
          <p
            className={`${italiana.className} text-white text-[2.5rem] mt-4 text-center order-2 xl:hidden `}
          >
            {/* Beauty */}
          </p>
          <p className="text-white text-sm l max-w-[25.8rem] xl:ms-9 text-center xl:text-start order-2 xl:order-1 leading-7 xl:leading-5">
            {serviceInfo?.description}
          </p>
          <div className="relative xl:absolute xl:z-10 xl:top-9 w-full xl:-left-20 flex items-center justify-center rounded-es-[2.5rem] rounded-se-[2.5rem] overflow-hidden  order-1 xl:order-2 mt-6 xl:mt-0 xl:w-[28.5rem] xl:h-[21.6rem] max-h-[calc(100vw/2)] video-white-border">
            <video
              onClick={() => setIsPlayMovies((pre) => !pre)}
              id="salaon-movies"
              className="w-full h-full object-cover "
              onPause={() => setIsPlayMovies(false)}
            >
              <source
                src={serviceInfo?.video ? gatewayUrl + serviceInfo?.video : ""}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div
              className={` video-primary-gradient absolute top-0 h-full w-full z-20 rounded-es-[2rem] rounded-se-[2rem] ${
                isPlayMovies && "!hidden"
              }`}
            />
            <div
              className={`flex items-center justify-center w-10 h-10 z-30 rounded-lg absolute top-1/2 transform  -translate-y-1/2 bg-white bg-opacity-20 cursor-pointer ${
                isPlayMovies && "!hidden"
              }`}
              onClick={() => setIsPlayMovies(true)}
            >
              <svg height="21" width="21" className="fill-white ">
                <use href={"/assets/images/icons/landing.svg#white-play"}></use>
              </svg>
            </div>
          </div>
          <svg
            height="68"
            width="43"
            className="fill-black stroke-transparent rotate-90 absolute top-[0.625rem] -left-[6.75rem] z-0 hidden xl:block"
          >
            <use href={"/assets/images/icons/landing.svg#dots"}></use>
          </svg>
        </div>
      </div>
      <div className="pink-gradient absolute -bottom-4 lg:-bottom-14 left-2/4 -translate-x-2/4 xl:translate-x-0 xl:-left-16 w-[19rem] h-[19rem] rounded-full blur-3xl z-0" />
    </section>
  );
};

export default ServicesSection;
