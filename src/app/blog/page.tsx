"use client";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Image from "next/image";
import img from "../../../public/assets/images/model-9.jpg";
import userImg from "../../../public/assets/images/model-7.jpg";
import { FreeMode, Navigation, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import BlogDetailes from "./detailes";

const blogItems = [
  {
    id: 0,
    src: "/assets/images/portfolios-1.png",
    name: "بدن",
  },
  {
    id: 1,
    src: "/assets/images/portfolios-1.png",
    name: "کاشت‌ناخن",
  },
  {
    id: 2,
    src: "/assets/images/portfolios-1.png",
    name: "تتو ابرو",
  },
  {
    id: 3,
    src: "/assets/images/portfolios-1.png",
    name: "تتو بدن",
  },
  {
    id: 4,
    src: "/assets/images/portfolios-1.png",
    name: "پوست",
  },
  {
    id: 5,
    src: "/assets/images/portfolios-1.png",
    name: "میکاپ",
  },
  {
    id: 6,
    src: "/assets/images/portfolios-1.png",
    name: "بدن",
  },
  {
    id: 7,
    src: "/assets/images/portfolios-1.png",
    name: "کاشت‌ناخن",
  },
  {
    id: 8,
    src: "/assets/images/portfolios-1.png",
    name: "تتو ابرو",
  },
  {
    id: 9,
    src: "/assets/images/portfolios-1.png",
    name: "تتو بدن",
  },
  {
    id: 10,
    src: "/assets/images/portfolios-1.png",
    name: "پوست",
  },
];
const Blog = () => {
  // const [activeHairStylist, setActiveHairStylist] = useState(0);

  return (
    <div className="pt-10 ">
      <div className="pink-gradient absolute top-5 lg:-bottom-14 left-2/4 -translate-x-2/4 xl:translate-x-0 xl:-left-16 w-[19rem] h-[19rem] rounded-full blur-3xl z-0" />
      <div className="pink-gradient absolute top-28 lg:-bottom-14 right-2/4 -translate-x-2/4 xl:translate-x-0 xl:-right-16 w-[19rem] h-[19rem] rounded-full blur-3xl z-0" />
      <Header />
      <div className="flex flex-col items-center content-center">
        <h3 className="text-black w-80 text-center text-3xl h-14 font-bold">
          بهترین مقالات درباره مو،صورت،بدن،ناخن و تتو
        </h3>
        {/* <div className="py-10">hashtag-blog</div> */}
        {/* slide */}
        <div className="flex flex-row w-full">
          {/* <Swiper
            className="flex flex-row pt-10 mt-14 w-full !px-5 lg:!px-[7.5rem]"
            freeMode={true}
            modules={[FreeMode, Navigation]}
            navigation={{
              nextEl: ".customers-option-navigation-next",
              prevEl: ".customers-option-navigation-prev",
              disabledClass: "disabled-swiper-navigation",
            }}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
            }}
          > */}
          {/* // <SwiperSlide className=" w-full flex flex-row" key={item.id}> */}
          {/* <div className=" size-44">
                    <Image
                    className="z-10 rounded-se-3xl rounded-es-3xl "
                    width={1000}
                    height={1000}
                    src={img}
                    alt=""
                    />
                    <div className="-top-52 text-white z-50 h-10">
                    {item.name}
                    </div>
                  </div> */}
          {blogItems.map((item) => (
            <div className=" flex flex-col size-44 pt-12 relative">
              <div className=" font-bold text-white absolute z-0">
                <div className="flex items-center justify-center w-[6.5rem] mx-auto h-10 z-30 rounded-lg absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-1 border-white border-opacity-40 bg-opacity-30 backdrop-blur-sm">
                  {item.name}
                </div>
                <Image
                  className="rounded-se-3xl rounded-es-3xl "
                  width={1000}
                  height={1000}
                  src={img}
                  alt=""
                />
              </div>
            </div>
          ))}
          {/* </SwiperSlide> */}

          {/* <div className="flex flex-col">
              {blogItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className=" size-44">
                    <Image
                      className="z-10 rounded-se-3xl rounded-es-3xl "
                      width={1000}
                      height={1000}
                      src={img}
                      alt=""
                    />
                    <div className="-top-52 text-white z-50 h-10">
                      {item.name}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div> */}
          {/* </Swiper> */}
        </div>
        {/*end slide */}
        {/* step fix dosent work */}
        {/* <div className="sm:w-full sm:mx-auto sm:max-w-[58.75rem] pb-[6.7rem] lg:pb-0">
        <Swiper
          className="w-full !px-5 sm:!px-0"
          modules={[Grid, FreeMode]}
          breakpoints={{
            0: {
              grid: { rows: 3, fill: "row" },
              spaceBetween: 8,
              slidesPerView: 2,
            },
            640: {
              grid: { rows: 1, fill: "row" },
              spaceBetween: 16,
              slidesPerView: 3,
            },
            768: {
              grid: { rows: 1, fill: "row" },
              spaceBetween: 16,
              slidesPerView: 4,
            },
            1024: {
              grid: { rows: 1, fill: "row" },
              spaceBetween: 16,
              slidesPerView: 5,
            },
          }}
          freeMode
        >
          {hairdressers?.map((item) => (
            <SwiperSlide key={item?.id}>
              <div
                key={item?.id}
                onClick={() => setActiveHairStylist(+item?.id)}
                className="relative h-[8.75rem] sm:h-[9.5rem] flex flex-col items-center cursor-pointer"
              >
                <div className="absolute -top-0 z-20">
                  <div className="relative w-[5.625rem] h-[5.625rem] sm:w-[6.313rem] sm:h-[6.313rem]">
                    <Image
                    className=" rounded-se-[2.5rem] rounded-es-[2.5rem] "
                      src={item.src}
                      alt=""
                      fill
                    />
                  </div>
                </div>

                <div
                  className={`flex w-full min-w-full h-[4.75rem] transition-[border] duration-700 border items-end justify-center border-card-border ${
                    activeHairStylist === +item?.id && "border-pink-primary"
                  } rounded-2xl px-2 sm:px-4 mt-auto pb-4`}
                >
                  <p className="text-[0.938rem] leading-5 font-semibold">
                    {item?.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

        {/* <Swiper
          className="w-full cursor-grab !px-5"
          modules={[FreeMode]}
          freeMode
          spaceBetween={10}
          slidesPerView={"auto"}
        >
          {blogItems?.map((item) => (
            <SwiperSlide key={item?.id} className="!w-auto">
              <div className=" size-44">
                <Image
                  className="rounded-se-3xl rounded-es-3xl "
                  width={1000}
                  height={1000}
                  src={img}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}

        <div className=" w-full pt-10 px-20 py-10">
          <div className="flex flex-row justify-between justify-items-center w-full  py-8 ">
            <div className="flex flex-col">
              <p className="text-xl font-bold w-44">محبوب‌ترین‌ها</p>
              <p className="text-sm">چندتا از محبوب‌ترین مقاله‌های ما</p>
            </div>
            <p className="text-pink-primary">
              {" "}
              <span>
                <svg
                  width="20"
                  height="20"
                  className="fill-pink-primary stroke-transparent"
                >
                  <use
                    href={"assets/images/icons/arrow-left3.svg2#arrow-left"}
                  ></use>
                </svg>
              </span>
              مشاهده همه
            </p>
          </div>
          <div className="flex flex-row justify-between w-full items-center ">
            {/* comments */}
            <div className="flex flex-col me-3">
              {Array.from({ length: 4 }).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row p-4 mb-3 border border-gray-100 bg-white w-full justify-between h-[132px] me-5 rounded-ss-[4px] rounded-es-3xl rounded-ee-[4px] rounded-se-3xl"
                >
                  <div>
                    <p className="text-pink-primary bg-pink-50 font-medium h-fit w-fit text-xs px-7 py-1 rounded-2xl">
                      ناخن
                    </p>
                    <p className="text-black text-base font-semibold py-3">
                      بهترین برند رنگ مو که باعث آسیب به مو نمی‌شود
                    </p>
                    <div className="flex flex-row content-center items-center">
                      <Image
                        alt="user"
                        width={500}
                        height={500}
                        src={userImg}
                        className="rounded-full bg-slate-200 size-8 border-2 border-pink-primary"
                      />
                      <p className="text-black px-2 text-xs font-medium ">
                        محسن ظریف
                      </p>
                      <span className="bg-pink-primary size-1 rounded-full" />
                      <p className="text-black px-2 text-xs font-medium">
                        1403/5/3
                      </p>
                      <svg
                        width="20"
                        height="20"
                        className="fill-pink-primary stroke-transparent"
                      >
                        <use
                          href={
                            "assets/images/icons/arrow-left3.svg2#arrow-left"
                          }
                        ></use>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={userImg}
                      alt="user image"
                      width={1000}
                      height={1000}
                      className="size-[100px] rounded-ss-[4px] rounded-es-3xl rounded-ee-[4px] rounded-se-3xl"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* image comments */}
            <div className="flex items-end justify-center w-[647px] h-[564px] bg-pink-300 rounded-ss-[4px] rounded-es-3xl rounded-ee-[4px] rounded-se-3xl z-20">
              <div className="flex flex-col w-[379px] h-[157px] mb-10  p-4 rounded-ss-[4px] rounded-es-3xl rounded-ee-[4px] rounded-se-3xl z-30 bg-white bg-opacity-30 backdrop-blur-sm ">
                <p className="text-pink-primary bg-pink-50 font-medium h-fit w-fit text-sm px-3.5 py-1 rounded-2xl">
                  ناخن
                </p>
                <p className="text-white text-lg font-semibold py-4">
                  بهترین برند رنگ مو که باعث آسیب به مو نمی‌شود
                </p>
                <div className="flex flex-row content-center items-center">
                  <Image
                    alt="user"
                    width={500}
                    height={500}
                    src={userImg}
                    className="rounded-full bg-slate-200 size-8 border-2 border-pink-primary"
                  />
                  <p className="text-white px-2 text-sm font-medium ">
                    محسن ظریف
                  </p>
                  <span className="bg-pink-primary size-1.5 rounded-full" />
                  <p className="text-white px-2 text-sm font-medium">
                    1403/5/3
                  </p>
                  <svg
                    width="20"
                    height="20"
                    className="fill-pink-primary stroke-transparent"
                  >
                    <use
                      href={"assets/images/icons/arrow-left3.svg2#arrow-left"}
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-6  px-20 py-10">
          <div className="flex flex-row justify-between py-8 ">
            <div className="flex flex-col">
              <p className="text-xl font-bold w-44">آخرین مقاله‌ها</p>
              <p className="text-sm">چندتا از آخرین مقاله‌های ما</p>
            </div>
            <p className="text-pink-primary">
              {" "}
              <span>
                <svg
                  width="20"
                  height="20"
                  className="fill-pink-primary stroke-transparent"
                >
                  <use
                    href={"assets/images/icons/arrow-left3.svg2#arrow-left"}
                  ></use>
                </svg>
              </span>
              مشاهده همه
            </p>
          </div>
          <div className="flex flex-row justify-between gap-y-5 flex-wrap w-full items-center ">
            {Array.from({ length: 6 }).map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-[363px] h-fit bg-white p-8 rounded-ss-[4px] rounded-es-3xl rounded-ee-[4px] rounded-se-3xl border border-gray-100"
              >
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src={userImg}
                  className="w-[300px] h-[180px] rounded-ss-[4px] rounded-es-3xl rounded-ee-[4px] rounded-se-3xl border"
                />
                <div className="flex flex-row justify-between py-3 items-center border-b border-gray-100">
                  <div className="flex flex-row items-center">
                    <Image
                      alt="user"
                      width={500}
                      height={500}
                      src={userImg}
                      className="rounded-full bg-slate-200 size-8 border-2 border-pink-primary"
                    />
                    <p className="text-black px-2 text-xs font-medium ">
                      محسن ظریف
                    </p>
                  </div>
                  <p className="text-sm font-medium  text-pink-primary">
                    محتوای آموزشی
                  </p>
                </div>
                <div className="flex flex-col justify-between py-3 leading-relaxed text-start border-b border-gray-100">
                  <p className="text-black text-base font-semibold pb-1.5">
                    بهترین برند رنگ مو که باعث آسیب به مو نمی‌شود
                  </p>
                  <p className="text-black font-normal text-xs pb-1.5 opacity-80 ">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است...
                  </p>
                  <p className="text-xs font-medium  text-pink-primary">
                    نمایش بیشتر{" "}
                  </p>
                </div>
                <div className="flex flex-row gap-9 items-center text-center pt-5">
                  <p className="text-sm text-black font-medium">کامنت (4)</p>
                  <span className="bg-pink-primary size-1 rounded-full" />
                  <p className="text-sm text-black font-medium">1403/5/3</p>
                  <span className="bg-pink-primary size-1 rounded-full" />
                  <p className="text-sm text-black font-medium">1K</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* favorite blogs */}
      <div className="mx-auto w-full">
        <Footer />
      </div>
      <BlogDetailes />
    </div>
  );
};
export default Blog;
