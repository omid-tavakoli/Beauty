"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { FreeMode, Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/free-mode";
import { useGet } from "@/hooks/usefetch";
import { getCategoryByBranch } from "@/service/api/branch";
import { useSearchParams } from "next/navigation";
import useAddQueryParams from "@/hooks/useAddQueryParams";

interface IProps {
  wrapperClassName?: string;
  categories?: any;
}

const ServicesCategories: FC<IProps> = (props) => {
  const addQueryParam = useAddQueryParams();
  const searchParams = useSearchParams();
  const branchId = searchParams.get("bi");
  const serviceId = searchParams.get("si");

  const [selectedBranch, setSelectedBranch] = useState("");

  const { data: categoryBranch, isLoading } = useGet(
    getCategoryByBranch,
    { enable: !!branchId },
    { id: branchId! }
  );

  useEffect(() => {
    if (!!categoryBranch)
      if (!!serviceId) {
        let index = { firsIndex: "", lastIndex: 0 };
        Object.entries(categoryBranch?.entity).forEach(
          (keyValue, indexKeyValue) => {
            keyValue[1].forEach((service, indexService) => {
              if (service.id === serviceId) {
                index = { firsIndex: keyValue[0], lastIndex: indexService };
              }
            });
          }
        );
        if (index.firsIndex !== "") {
          setSelectedBranch(index.firsIndex);
        }
      } else setSelectedBranch(Object.keys(categoryBranch?.entity ?? [])[0]);
  }, [categoryBranch]);

  return (
    <section className={`w-full h-full ${props?.wrapperClassName}`}>
      {isLoading ? (
        <>
          <div className="!flex w-[calc(100%-2.5rem)] beauty:w-full h-[2.4rem] mb-4 custom-divider mx-auto gap-x-4">
            <div className="w-full max-w-none sm:max-w-[calc(100%-4.25rem)] flex gap-6 items-start justify-between sm:justify-normal">
              {new Array(6).fill("").map((item) => (
                <div className="skeleton w-[15%] sm:w-[10%] h-5 mt-[0.375] mb-[0.75rem] rounded-md" />
              ))}
            </div>
            <div className="w-[4.25rem] hidden sm:flex pb-2 gap-2 shrink-0">
              <div className="skeleton w-[1.875rem] h-[1.875rem] rounded-md" />
              <div className="skeleton w-[1.875rem] h-[1.875rem] rounded-md" />
            </div>
          </div>
          <div className="grid grid-rows-4 grid-cols-3 gap-2 sm:grid-rows-2 sm:grid-cols-5 sm:gap-[0.875rem] md:grid-rows-2 md:grid-cols-6 md:gap-[0.875rem] lg:grid-rows-2 lg:grid-cols-8 lg:gap-[0.875rem] w-full px-5 beauty:px-0 min-h-[15.625rem]">
            {new Array(16).fill("").map((item) => (
              <div className="skeleton flex flex-col justify-between items-center h-[7.25rem] rounded-tl-3xl rounded-br-3xl rounded-tr-[0.25rem] rounded-bl-[0.25rem]"></div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="!flex w-[calc(100%-2.5rem)] beauty:w-full h-[2.4rem] mb-4 custom-divider mx-auto">
            <ul className="w-full flex gap-6 items-start justify-normal overflow-x-auto no-scrollbar">
              {Object.keys(categoryBranch?.entity ?? [])?.map((branch, i) => (
                <li
                  key={i}
                  onClick={() => setSelectedBranch(branch)}
                  className={`services-categories ${
                    selectedBranch === branch &&
                    "text-pink-primary after:!w-full before:!w-full"
                  }  
        `}
                >
                  {branch}
                </li>
              ))}
            </ul>
            <div className="hidden sm:flex pb-2 gap-2 flex-shrink-0">
              <Image
                className="services-categories-navigation-next cursor-pointer rotate-180"
                src={"/assets/images/icons/arrow-left.svg"}
                alt=""
                width={30}
                height={30}
              />
              <Image
                className="services-categories-navigation-prev cursor-pointer"
                src={"/assets/images/icons/arrow-left.svg"}
                alt=""
                width={30}
                height={30}
              />
            </div>
          </div>
          <Swiper
            className="w-full !px-5 beauty:!px-0 min-h-[15.625rem]"
            wrapperClass="!mx-0"
            modules={[Grid, Navigation, FreeMode]}
            navigation={{
              nextEl: ".services-categories-navigation-next",
              prevEl: ".services-categories-navigation-prev",
              disabledClass: "disabled-swiper-navigation",
            }}
            freeMode
            breakpoints={{
              0: {
                grid: { rows: 4, fill: "row" },
                spaceBetween: 8,
                slidesPerView: 3,
              },
              640: {
                grid: { rows: 2, fill: "row" },
                spaceBetween: 14,
                slidesPerView: 5,
              },
              768: {
                grid: { rows: 2, fill: "row" },
                spaceBetween: 14,
                slidesPerView: 6,
              },
              1024: {
                grid: { rows: 2, fill: "row" },
                spaceBetween: 14,
                slidesPerView: 8,
              },
            }}
          >
            {categoryBranch?.entity?.[selectedBranch]?.map((item) => (
              <SwiperSlide key={item?.id}>
                <div
                  onClick={() => {
                    addQueryParam("si", item.id);
                  }}
                  className={`flex flex-col justify-between items-center h-[7.25rem] cursor-pointer border border-card-border ${
                    serviceId === item?.id && "border-pink-primary"
                  } transition-[border] duration-700 py-3 sm:py-4 px-1 sm:px-[1.125rem] rounded-tl-3xl rounded-br-3xl rounded-tr-[0.25rem] rounded-bl-[0.25rem]`}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl  bg-[rgba(var(--primary-rgb),0.2)]">
                    <svg
                      width="40"
                      height="40"
                      className={`fill-black stroke-none cursor-pointer`}
                    >
                      <use
                        href={`/assets/images/icons/services.svg#${item.iconAddress}`}
                      ></use>
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm leading-[1.625rem] font-medium text-center">
                    {item?.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </section>
  );
};

export default ServicesCategories;
