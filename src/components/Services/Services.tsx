"use client";
import { GetFilterByBranchIdResponse } from "@/service/api/service";
import { gatewayUrl } from "@/service/config/variables";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
interface ServiceItem {
  Services: GetFilterByBranchIdResponse;
}
const Services: FC<ServiceItem> = (props) => {
  const { Services } = props;
  const listLineApi = Object.keys(Services ?? []);
  const [line, setLine] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  useEffect(() => {
    setLine(listLineApi[0]);
  }, []);
  return (
    <div>
      <div className="pr-5 lg:pr-0">
        <Swiper
          className="w-full"
          freeMode={true}
          direction="horizontal"
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
          }}>
          <SwiperSlide className="!w-auto">
            <div  onClick={() => setShowSearch(!showSearch)} className="md:w-[18.75rem] h-[3.75rem] sm:h-[4.625rem] flex-shrink-0 transition-colors duration-700 hover:bg-white flex items-center gap-x-3 border border-card-border p-2 sm:p-3 rounded-tr-[0.25rem] rounded-bl-[0.25rem] rounded-tl-3xl rounded-br-3xl">
              <div className="flex-shrink-0 flex items-center justify-center w-[2.625rem] lg:w-[3.125rem] h-[2.625rem] lg:h-[3.125rem] bg-pink-80 rounded-2xl">
                <svg
                  width="24"
                  height="24"
                  className="fill-black stroke-transparent z-50"
                >
                  <use href={"assets/images/icons/portfolios.svg#search"}></use>
                </svg>
              </div>
              <input
                className={`${showSearch ? '!w-[13.75rem]' : 'hidden'} md:block text-sm w-full  leading-[1.375rem] font-normal placeholder:text-black/60 text-black bg-transparent`}
                placeholder="خدمت مورد نظر خود را جستجو کنید"
              />
            </div>
          </SwiperSlide>
          {listLineApi.map((item, key) => (
            <SwiperSlide className="!w-auto" key={key}>
              <div
                onClick={() => setLine(item)}
                className={`cursor-pointer w-40 lg:w-[11.875rem] h-[3.75rem] sm:h-[4.625rem] flex-shrink-0 transition-colors duration-700 ${line == item ? "bg-white" : "bg-transparent"
                  } hover:bg-white flex items-center gap-x-3 border border-card-border p-2 sm:p-3 rounded-tr-[0.25rem] rounded-bl-[0.25rem] rounded-tl-3xl rounded-br-3xl`}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-[2.625rem] lg:w-[3.125rem] h-[2.625rem] lg:h-[3.125rem] bg-pink-80 rounded-2xl">
                  <svg
                    width="24"
                    height="24"
                    className="fill-black stroke-transparent z-50"
                  >
                    <use href={"assets/images/icons/services.svg#eyes"}></use>
                  </svg>
                </div>
                <span className="font-semibold  ">{item}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-4 flex-wrap mt-6 px-5 lg:px-0">
        {Services?.[line]?.map((item) => (
          <Link href={`servicesDetails/${item.id}`}>
            <div className="flex  gap-x-1.5 relative w-[16.75rem] h-[11.75rem] border border-black/[8%] rounded-2xl p-2">
              {item.discount && (
                <span className="absolute flex items-center justify-center text-white right-4 top-4 w-11 h-8 rounded-full bg-pink-primary">
                  {item.discount}
                  <span>%</span>
                </span>
              )}
              <div>
                <Image
                  src={item.samples[1] ? gatewayUrl + item.samples[0] : '/assets/images/portfolios-1.png'}
                  alt=""
                  width={96}
                  height={174}
                  className="rounded-2xl h-[10.575rem] w-[6rem]"
                />
              </div>
              <div className="flex flex-col">
                <div className="mb-2">
                  <Image
                    src={item.samples[1] ? gatewayUrl + item.samples[1] : '/assets/images/portfolios-2.png'}
                    alt=""
                    width={150}
                    height={120}
                    className="rounded-2xl h-[7.5rem] w-[9.375rem]"
                  />
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <span className="font-semibold">{item.title}</span>
                  <div className="flex">
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      میانگین زمان انجام:
                    </span>
                    <span className="text-sm font-semibold">{item.prepay}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
