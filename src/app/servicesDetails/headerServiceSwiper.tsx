"use client"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/effect-fade";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const examplesOfWorks = [
  { id: "0", src: "model-1.jpg" },
  { id: "1", src: "model-2.jpg" },
  { id: "3", src: "model-3.jpg" },
  { id: "4", src: "model-4.jpg" },
  { id: "5", src: "model-5.jpg" },
  { id: "6", src: "model-6.jpg" },
  { id: "7", src: "model-7.jpg" },
  { id: "8", src: "model-8.jpg" },
  { id: "9", src: "model-9.jpg" },
  { id: "10", src: "model-10.jpg" },
  { id: "11", src: "model-1.jpg" },
  { id: "12", src: "model-2.jpg" },
];

export function MobileHeaderSwiper() {
  return (
    <Swiper
      className="w-full cursor-grab !px-5"
      modules={[FreeMode]}
      freeMode
      spaceBetween={10}
      slidesPerView={"auto"}
    >
      {examplesOfWorks?.map((item, i) => (
        <SwiperSlide key={item?.id} className="!w-auto">
          <div className="relative w-[6.438rem] h-[7.125rem]">
            <Image
              src={`/assets/images/${item?.src}` ?? ""}
              alt=""
              className="rounded-2xl"
              fill
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function DesktopHeaderSwiper() {
  return (
    <Swiper
      className="w-full cursor-grab !px-5"
      modules={[FreeMode]}
      freeMode
      spaceBetween={16}
      slidesPerView={"auto"}
    >
      {examplesOfWorks?.map((item) => (
        <SwiperSlide key={item?.id} className="!w-auto">
          <div className="relative w-[10.875rem] h-[11.875rem]">
            <Image
              src={`/assets/images/${item?.src}` ?? ""}
              alt=""
              className="rounded-3xl"
              fill
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
