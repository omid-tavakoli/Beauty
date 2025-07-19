"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/effect-fade";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@/components/theme/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const closesTimes = [
  {
    id: 0,
    branch: "شعبه ملاصدرا 1 _ الناز ملک ثابت",
    dateAndTime: "29 فروردین - ساعت 11:30",
  },
  {
    id: 1,
    branch: "شعبه اطلسی 2 _ مهناز زارع",
    dateAndTime: "29 اردیبهشت - ساعت 11:30",
  },
  {
    id: 2,
    branch: "شعبه بهشتی 3 _سارینا دهقان",
    dateAndTime: "29 اسفند - ساعت 11:30",
  },
];
const ReservationService = () => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col gap-2 w-full rounded-2xl">
      <div className="flex justify-between items-start">
        <p className="text-sm font-medium text-gray-500">
          نزدیک ترین زمان ممکن
        </p>
        <div className="flex gap-2">
          <div className="relative closes-time-navigation-prev cursor-pointer w-6 h-[1.375rem]">
            <Image
              className="-rotate-180"
              src={"assets/images/icons/arrow-left-pink.svg"}
              alt=""
              fill
            />
          </div>
          <div className="relative closes-time-navigation-next cursor-pointer w-6 h-[1.375rem]">
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
        navigation={{
          prevEl: ".closes-time-navigation-prev",
          nextEl: ".closes-time-navigation-next ",
          disabledClass: "disabled-swiper-navigation",
        }}
        slidesPerView={1}
      >
        {closesTimes?.map((item) => (
          <SwiperSlide key={item?.id}>
            <div className="flex flex-col gap-2 mt-0">
              <p className="text-xs font-semibold text-black">{item?.branch}</p>
              <span className="text-base leading-5 font-semibold text-black">
                {item?.dateAndTime}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        className="flex items-center justify-center"
        onClick={() => {
          router.push("/reservation/branches");
        }}
      >
        رزورو وقت
      </Button>
      <p className="flex items-center justify-center text-pink-100 font-semibold text-sm bg-pink-100 rounded-xl bg-opacity-10 h-10 ">
        ۲۰٪ تخفیف به مناست شب یلدا
      </p>
    </div>
  );
};
export default ReservationService;
