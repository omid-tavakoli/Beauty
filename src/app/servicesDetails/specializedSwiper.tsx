"use client"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/effect-fade";
import { FreeMode, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const hairdressers = [
  { id: "1", title: "بانو محیا فرزین", src: "/assets/images/hair-stylist.png" },
  {
    id: "2",
    title: "بانو فاطمه زارع شاه‌ابادی",
    src: "/assets/images/barber1.png",
  },
  { id: "3", title: "بانو مهدیه ابراهیمی", src: "/assets/images/barber2.png" },
  { id: "4", title: "بانو مهسا عاصی", src: "/assets/images/barber3.png" },
  { id: "5", title: "بانو مهسان صادقی", src: "/assets/images/barber4.png" },
  { id: "6", title: "بانو محیا فرزین", src: "/assets/images/barber5.png" },
  {
    id: "7",
    title: "بانو فاطمه زارع شاه‌ابادی",
    src: "/assets/images/hair-stylist.png",
  },
  { id: "8", title: "بانو مهدیه ابراهیمی", src: "/assets/images/barber1.png" },
  { id: "9", title: "بانو مهسا عاصی", src: "/assets/images/barber2.png" },
  { id: "10", title: "بانو مهسان صادقی", src: "/assets/images/barber3.png" },
];

export default function SpecializedSwiper() {
  return (
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
      {hairdressers?.map((item) => (
        <SwiperSlide key={item?.id}>
          <div
            key={item?.id}
            className="relative h-[8.75rem] sm:h-[9.5rem] flex flex-col items-center cursor-pointer"
          >
            <div className="absolute -top-0 z-20">
              <div className="relative w-[5.625rem] h-[5.625rem] sm:w-[6.313rem] sm:h-[6.313rem]">
                <Image
                  src={item.src}
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
                {item?.title}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
