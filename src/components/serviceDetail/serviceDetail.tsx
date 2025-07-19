"use client";
import { GetServiceDetailsResponse } from "@/service/api/service";
import Image from "next/image";
import { EffectFade, FreeMode, Grid, Navigation } from "swiper/modules";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../theme/Button";
import { useRouter } from "next/navigation";
import { toJalaali } from "@/service/utils/date";
import { gatewayUrl } from "@/service/config/variables";

interface ServiceItem {
  Services: GetServiceDetailsResponse;
}
const ServiceDetail: FC<ServiceItem> = (props) => {
  const router = useRouter();
  const { Services } = props;
  return (
    <>
      <div className="flex gap-x-4 w-full max-w-beauty mx-auto h-full">
        <div className="right-side w-full lg:w-[calc(100%-23.938rem)]">
          <div className="order-1 lg:order-none flex flex-col gap-y-[0.625rem] mb-5 lg:mb-0 px-5 lg:pe-0 beauty:px-0">
            <p className="text-2xl text-[1.625rem] lg:leading-[1.875rem] font-bold text-black text-center lg:text-start">
              {Services.title}
            </p>
            <p className="text-[0.938rem] leading-[1.625rem] font-normal text-black text-center lg:text-start">
              {Services.description}
            </p>
          </div>
          <span className="hidden sm:block custom-divider my-[1.875rem] lg:w-[calc(100%-20px)] lg:ms-auto beauty:w-full beauty:ms-0" />

          <div className="lg:hidden flex flex-col px-5 lg:pe-0 beauty:px-0">
            <div className="w-full flex gap-x-4 mb-3">
              <div className="w-full flex flex-col items-center justify-center bg-white border border-card-border rounded-2xl p-[0.875rem]">
                <p className="text-black/60 text-sm leading-5 font-medServicesium mb-2">
                  میانگین زمان انجام
                </p>
                <span className=" flex gap-1 text-black text-base leading-5 font-semibold">
                  {+Services.duration.split(":")[0] != 0 ? (
                    <div>
                      {+Services.duration.split(":")[0]} <span>ساعت</span>
                    </div>
                  ) : (
                    ""
                  )}
                  {+Services.duration.split(":")[0] != 0 &&
                    +Services.duration.split(":")[1] != 0
                    ? "و"
                    : ""}
                  {+Services.duration.split(":")[1] != 0 ? (
                    <div>
                      {+Services.duration.split(":")[1]} <span>دقیقه</span>
                    </div>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <div className="w-full flex flex-col items-center justify-center bg-white border border-card-border rounded-2xl p-[0.875rem]">
                <p className="text-black/60 text-sm leading-5 font-medium mb-2">
                  متخصص‌های ما
                </p>
                <span className="text-black text-base leading-5 font-semibold">
                  <span>{Services.countOfPersonnel}</span> نفر
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col p-5 bg-white border border-card-border rounded-2xl mb-3">
              <div className="w-full flex justify-between items-center mb-[0.375rem]">
                <p className="text-sm leading-5 font-medium text-black/60">
                  هزینه حدودی
                </p>
                <span className="text-base leading-5 font-semibold text-black">
                  {Services.prepay}
                  <span className="text-[0.625rem] leading-5 font-semibold text-black">
                    تومان
                  </span>
                </span>
              </div>
              <p className="text-xs leading-[1.125rem] font-normal text-black/60">
                هزینه بستگی به میزان زمان و موادی که برای شما استفاده می‌شود
                محاسبه می‌شود
              </p>
            </div>
          </div>
          <span className="lg:hidden custom-divider my-[1.875rem] lg:w-[calc(100%-20px)] lg:ms-auto beauty:w-full beauty:ms-0" />

          <div className="flex flex-col gap-y-[0.625rem] lg:gap-y-4 px-5 lg:pe-0 beauty:px-0">
            <h2 className="text-xl leading-[1.875rem] font-bold text-black text-center lg:text-start">
              قبل از انجام {Services.title} این نکات رو در نظر داشته باشید
            </h2>
            <div className="flex flex-col gap-y-2">
              {Services.details?.map((item) => {
                if (item.isActive && item.type == 1) {
                  return (
                    <p
                      key={item.id}
                      className="text-[0.875rem] lg:text-[0.938rem] leading-[1.625rem] font-normal text-black inline"
                    >
                      <svg className="fill-[url(#star-gradient-svg)] w-5 h-5 inline align-middle me-2">
                        <use
                          href={"assets/images/icons/landing.svg#primary-star2"}
                        ></use>
                        <linearGradient
                          id="star-gradient-svg"
                          x1="10"
                          y1="0"
                          x2="10"
                          y2="20"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.0889996" stopColor="#F23C52" />
                          <stop offset="1" stopColor="#EB1086" />
                        </linearGradient>
                      </svg>
                      {item.name}
                    </p>
                  );
                }
              })}
            </div>
          </div>

          <span className="custom-divider my-[1.875rem] lg:w-[calc(100%-20px)] lg:ms-auto beauty:w-full beauty:ms-0" />

          <div className="flex flex-col">
            <p className="text-xl leading-[1.875rem] font-bold text-black mb-4 lg:mb-5 text-center lg:text-start gap-x-5 px-5 beauty:px-0">
              متخصصان بیوتی
            </p>
            <Swiper
              className="w-full !px-5 beauty:!px-0"
              modules={[Grid, FreeMode]}
              breakpoints={{
                0: {
                  grid: { rows: 2, fill: "row" },
                  spaceBetween: 8,
                  slidesPerView: 2,
                },
                640: {
                  grid: { rows: 2, fill: "row" },
                  spaceBetween: 8,
                  slidesPerView: 3,
                },
                1024: {
                  spaceBetween: 16,
                  slidesPerView: 3,
                },
                1120: {
                  spaceBetween: 16,
                  slidesPerView: 4,
                },
              }}
              slidesPerView={4}
              freeMode
            >
              {Services.users?.map((item) => {
                if (item.isActive) {
                  return (
                    <SwiperSlide key={item.id}>
                      <div
                        key={item.id}
                        className="relative h-[8.75rem] sm:h-[9.5rem] flex flex-col items-center cursor-pointer"
                      >
                        <div className="absolute -top-0 z-20">
                          <div className="relative w-[5.625rem] h-[5.625rem] sm:w-[6.313rem] sm:h-[6.313rem]">
                            <Image
                              src={gatewayUrl + item.picture}
                              alt=""
                              className="rounded-se-[2.5rem] rounded-es-[2.5rem]"
                              fill
                              objectFit="cover"
                              loading="eager"
                            />
                          </div>
                        </div>
                        <div className="flex w-full bg-white min-w-full h-[4.75rem] transition-[border] duration-700 border items-end justify-center border-card-border rounded-2xl px-2 sm:px-4 mt-auto pb-4">
                          <p className="text-[0.938rem] leading-5 font-semibold text-black">
                            {item.firstName}
                            {item.lastName}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </div>

          <span className="custom-divider my-[1.875rem] lg:w-[calc(100%-20px)] lg:ms-auto beauty:w-full beauty:ms-0" />

          <div className="relative">
            <h2 className="text-xl leading-[1.875rem] font-bold text-black text-center lg:text-start px-5 lg:pe-0 beauty:px-0">
              مشتریان درباره ما چه می گویند
            </h2>
            <Swiper
              className="!pt-8 mt-5 lg:mt-10 w-full !px-5 beauty:!px-0"
              freeMode
              modules={[FreeMode, Navigation]}
              navigation={{
                nextEl: ".customers-comment-navigation-next",
                prevEl: ".customers-comment-navigation-prev",
                disabledClass: "disabled-swiper-navigation",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.3,
                  spaceBetween: 8,
                },
                640: {
                  slidesPerView: 2.5,
                  spaceBetween: 16,
                },
              }}
            >
              {Services.comments.map((comment, i) => (
                <SwiperSlide key={i} className="!h-[11.625rem]">
                  <div className="relative pt-[1.125rem] h-full rounded-3xl border border-card-border bg-gray-50 sm:bg-white cursor-grab">
                    <div className="absolute -top-8 -right-1 border-4 border-white bg-white rounded-3xl w-[5.625rem] lg:w-[5.375rem] h-[6.375rem] lg:h-[6.125rem] flex items-center justify-center z-20"></div>
                    <svg
                      height="32"
                      width="25"
                      className="fill-black lg:fill-gray-50 absolute -top-4 right-24 z-10"
                    >
                      <use
                        href={"assets/images/icons/landing.svg#quotation"}
                      ></use>
                    </svg>
                    <div className="flex flex-col ps-24">
                      <p className="text-sm leading-[1.375rem] font-semibold text-black">
                        {comment.user.firstName} {comment.user.lastName}
                      </p>
                      <p className="text-xs leading-[1.375rem] font-medium text-black">
                        <span className="opacity-50 font-normal">
                          نوع خدمت:
                        </span>
                        {Services.title}
                      </p>
                    </div>
                    <p className="h-[6.25rem] overflow-hidden text-xs leading-[1.188rem] lg:leading-5 font-normal text-black mt-3 m-[0.625rem]">
                      {comment.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="hidden lg:flex absolute left-1 top-0 pb-2 gap-2">
              <Image
                className="customers-comment-navigation-prev cursor-pointer rotate-180"
                src={"assets/images/icons/arrow-left.svg"}
                alt=""
                width={30}
                height={30}
              />
              <Image
                className="customers-comment-navigation-next cursor-pointer"
                src={"assets/images/icons/arrow-left.svg"}
                alt=""
                width={30}
                height={30}
              />
            </div>
          </div>

          <span className="custom-divider my-[1.875rem] lg:w-[calc(100%-20px)] lg:ms-auto beauty:w-full beauty:ms-0" />

          <div className="flex flex-col px-5 lg:pe-0 beauty:px-0">
            <h2 className="text-xl leading-[1.875rem] font-bold text-black mb-5 lg:mb-4 text-center lg:text-start">
              سوالات پر تکرار شما
            </h2>
            {Services.details?.map((item) => {
              if (item.isActive && item.type == 0) {
                return (
                  <div
                    key={item.id}
                    tabIndex={0}
                    className="collapse collapse-plus collapse-custom-plus border border-card-border mb-2 lg:mb-[0.625rem] bg-white"
                  >
                    <div className="text-sm leading-[1.375rem] font-semibold flex items-center relative collapse-title !p-[0.625rem]">
                      {item.name}
                      <span className="relative block w-8 h-8 bg-pink-40 rounded-lg ms-auto" />
                    </div>
                    <div className="collapse-content">
                      <p className="text-xs leading-5 font-normal text-black">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="hidden lg:block left-side w-[22.688rem] lg:pe-5 beauty:pe-0">
          <div className="w-full flex gap-x-4 mb-3">
            <div className="w-full flex flex-col items-center justify-center bg-white border border-card-border rounded-2xl p-[0.875rem]">
              <p className="text-black/60 text-sm leading-5 font-medium mb-2">
                میانگین زمان انجام
              </p>
              <span className="  flex gap-1 text-black text-base leading-5 font-semibold">
                {+Services.duration.split(":")[0] != 0 ? (
                  <div>
                    {+Services.duration.split(":")[0]} <span>ساعت</span>
                  </div>
                ) : (
                  ""
                )}
                {+Services.duration.split(":")[0] != 0 &&
                  +Services.duration.split(":")[1] != 0
                  ? "و"
                  : ""}
                {+Services.duration.split(":")[1] != 0 ? (
                  <div>
                    {+Services.duration.split(":")[1]} <span>دقیقه</span>
                  </div>
                ) : (
                  ""
                )}
              </span>
            </div>
            <div className="w-full flex flex-col items-center justify-center bg-white border border-card-border rounded-2xl p-[0.875rem]">
              <p className="text-black/60 text-sm leading-5 font-medium mb-2">
                متخصص‌های ما
              </p>
              <span className="text-black text-base leading-5 font-semibold">
                <span>{Services.countOfPersonnel}</span> نفر
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col p-5 bg-white border border-card-border rounded-2xl mb-3">
            <div className="w-full flex justify-between items-center mb-[0.375rem]">
              <p className="text-sm leading-5 font-medium text-black/60">
                هزینه حدودی
              </p>
              <span className="text-base leading-5 font-semibold text-black">
                {Services.prepay}
                <span className="text-[0.625rem] leading-5 font-semibold text-black">
                  تومان
                </span>
              </span>
            </div>
            <p className="text-xs leading-[1.125rem] font-normal text-black/60">
              هزینه بستگی به میزان زمان و موادی که برای شما استفاده می‌شود
              محاسبه می‌شود
            </p>
          </div>
          {Services.nearTimesToReserve &&
            Services.nearTimesToReserve.map((item) => (
              <div className="relative flex flex-col gap-2 w-full bg-white py-[0.875rem] px-[1.125rem] border border-card-border rounded-2xl">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-medium text-black">
                    نزدیک ترین زمان ممکن
                  </p>
                  <div className="flex items-center gap-1 closes-time-navigation-next cursor-pointer">
                    <div>
                      <span className="text-xs text-pink-primary">بعدی</span>
                    </div>
                    <div className="relative  w-6 h-[1.375rem]">
                      <Image
                        src={"assets/images/icons/arrow-left-pink.svg"}
                        alt=""
                        fill
                      />
                    </div>
                  </div>
                </div>
                <Swiper
                  className="w-full"
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  modules={[Navigation, EffectFade]}
                  loop
                  navigation={{
                    nextEl: ".closes-time-navigation-next ",
                    disabledClass: "disabled-swiper-navigation",
                  }}
                  slidesPerView={1}
                >
                  {Object.keys(item.freeTimes).map((date) => (
                    <SwiperSlide key={date}>
                      <div className="h-60 overflow-y-auto flex flex-col gap-2 mt-0">
                        {item.freeTimes[date].map((timeSlot, index) => (
                          <div key={index}>
                            {timeSlot.details.map((detail, detailIndex) => (
                              <div key={detailIndex}>
                                <p className="text-base font-semibold text-black">
                                  {detail.branchTitle} -{" "}
                                  {detail.branchUserFirstName}
                                  {detail.branchUserLastName}
                                </p>
                                <p className="text-lg font-bold text-black">
                                  {toJalaali(date.split("T")[0]).day.numeric}
                                  {toJalaali(date.split("T")[0]).month.persian}
                                  - ساعت{" "}
                                  {new Date(detail.start).toLocaleTimeString(
                                    "fa-IR",
                                    { hour: "2-digit", minute: "2-digit" }
                                  )}
                                </p>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Button
                  className="button-primary flex items-center justify-center"
                  onClick={() => {
                    router.push("/reservation/branches");
                  }}
                >
                  رزورو وقت
                </Button>
                {Services.discount ? (
                  <div className="flex items-center justify-center text-pink-primary rounded-xl h-10 text-sm bg-[rgba(var(--primary-rgb),0.1)] ">
                    <span>%</span>
                    {Services.discount}
                    {Services.discountDescription}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
