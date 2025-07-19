"use client"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/effect-fade";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const commentItem = [
    {
      id: 0,
      description:
        " هر کسی فقط یک بار مشتریتون بشه دیگ حتمااا مشتری ثابتتون میشه بهترین سالن زیبایی هستین 😍😍",
      src: "/assets/images/makeup.png",
      type: "آمبره",
      name: "مهسا",
    },
    {
      id: 1,
      description:
        "کارتون بینظیره مشتری 15 سالتون هستم همیشه خاص ترین خدمات و تحویلم دادین ممنونم",
      src: "/assets/images/example-3.png",
      type: "لایت",
      name: "زهرا",
    },
    {
      id: 2,
      description:
        "خدمات میکاپ  عالی بود  واقعا ماندگاری مواد میکاپتون عالی بود ، همچنین قیمت کارای وی آی پیتون نسبت به کیفیت مواد واقعاااا می ارزید و ارزونتر از همه ی سالنای تو یزد بود ما همه دخترخاله بودیم اما میکاپامون از خواهرای دوماد و خواهرای عروس قشنگتر بود ",
      src: "/assets/images/makeup1.png",
      type: "گریم و میکاپ",
      name: "نازنین",
    },
    {
      id: 3,
      description: "خیلی خیلی عالی بود برای عروسی من سنگ تموم گذاشتن",
      src: "/assets/images/portfolios-1.png",
      type: "شنیون",
      name: "ساناز",
    },
    {
      id: 4,
      description:
        "عروس سال 90 سالنتون بودم کارتون محشر و بی‌نظیر هر وقت عکسهام و میبینم کلی ذوق میکنم دستتون طلا❤️❤️❤️",
      src: "/assets/images/Rectangle6068.png",
      type: "گریم و میکاپ",
      name: "مهسا",
    },
  ];
export default function CommentServiceSwiper(){
return(
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
    {commentItem.map((comment, i) => (
      <SwiperSlide key={i} className="!h-[11.625rem]">
        <div className="relative pt-[1.125rem] h-full rounded-3xl border border-card-border bg-gray-50 sm:bg-white cursor-grab">
          <div className="absolute -top-8 -right-1 border-4 border-white bg-white rounded-3xl w-[5.625rem] lg:w-[5.375rem] h-[6.375rem] lg:h-[6.125rem] flex items-center justify-center z-20">
            <Image
              src={comment.src}
              alt=""
              className="rounded-3xl"
              fill
              loading="eager"
              objectFit="cover"
            />
          </div>
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
              {comment.name}
            </p>
            <p className="text-xs leading-[1.375rem] font-medium text-black">
              <span className="opacity-50 font-normal">
                نوع خدمت:
              </span>
              {comment.type}
            </p>
          </div>
          <p className="h-[6.25rem] overflow-hidden text-xs leading-[1.188rem] lg:leading-5 font-normal text-black mt-3 m-[0.625rem]">
            {comment.description}
          </p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
)
}