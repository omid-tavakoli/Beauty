"use client";
import Header from "@/components/Header";
import ServicesCategories from "@/components/ServicesCategories";
import "swiper/css";
import "swiper/css/effect-fade";

const closesTimes = [
  {
    id: 0,
    branch: "شعبه ملاصدرا 1 _ الناز ملک ثابت",
    dateAndTime: "29 فروردین - ساعت 11:30",
  },
  {
    id: 1,
    branch: "شعبه اطلسی 2 _  مهناز زارع",
    dateAndTime: "29 اردیبهشت - ساعت 11:30",
  },
  {
    id: 2,
    branch: "شعبه بهشتی 3 _ سارینا دهقان",
    dateAndTime: "29 اسفند - ساعت 11:30",
  },
];

const turnReservation = () => {
  return (
    <section className="flex flex-col w-full h-fit max-w-beauty mx-auto lg:pb-[4.375rem] xl:pt-10 pt-7">
      <Header />
      <span className="hidden lg:block w-full custom-divider mb-[3.75rem]" />
      <section className="w-full h-fit pb-[15.125rem] lg:pb-0">
        <h1 className="text-lg font-bold text-black text-center mb-14">
          کدام کار زیبایی را در سریع ترین زمان نوبت می خواهید؟
        </h1>
        <ServicesCategories />
        {/* <FooterResponsive wrapperClassName="!h-auto flex-col lg:flex-row items-center lg:!mt-[5.625rem] !pb-[0.625rem]">
          <div className="flex flex-col w-full lg:w-[auto] lg:flex-row gap-0 lg:gap-2.5">
            <div className="relative flex flex-col gap-2 w-full lg:w-[25.75rem] bg-white lg:py-[0.875rem] lg:px-[1.125rem] lg:border lg:border-card-border rounded-2xl">
              <div className="flex justify-between items-start">
                <p className="text-xs lg:text-sm font-medium text-gray-500">
                  نزدیک ترین زمان ممکن
                </p>
                <div className="flex gap-2">
                  <div className="relative closes-time-navigation-prev cursor-pointer w-5 h-5 lg:w-6 lg:h-[1.375rem]">
                    <Image
                      className="-rotate-180"
                      src={"assets/images/icons/arrow-left-pink.svg"}
                      alt=""
                      fill
                    />
                  </div>
                  <div className="relative closes-time-navigation-next cursor-pointer w-5 h-5 lg:w-6 lg:h-[1.375rem]">
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
                    <div className="flex justify-between lg:flex-col lg:justify-normal lg:gap-2 mt-[0.625rem] lg:mt-0">
                      <p className="text-xs font-semibold text-black">
                        {item?.branch}
                      </p>
                      <span className="text-sm lg:text-base leading-5 font-semibold text-black">
                        {item?.dateAndTime}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <span className="block lg:hidden w-full custom-divider mt-[0.625rem] mb-[0.375rem]" />
            <div className="flex flex-col gap-2 w-full lg:w-[19.438rem] bg-white lg:py-[0.875rem] lg:px-[1.125rem] lg:border lg:border-card-border rounded-2xl">
              <p className="text-xs leading-4 lg:text-sm font-medium text-gray-500">
                هزینه
              </p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-y-1 lg:gap-y-2">
                  <span className="text-[0.688rem] lg:text-xs font-semibold text-black">
                    مبلغ حدودی
                  </span>
                  <span className="text-sm lg:text-base leading-5 font-semibold text-black">
                    ۲۵۰,۰۰۰ - ۴۰۰,۰۰۰{" "}
                    <span className="text-[0.625rem] leading-5 font-semibold text-black">
                      تومان
                    </span>
                  </span>
                </div>
                <div className="flex flex-col gap-y-1 lg:gap-y-2">
                  <span className="text-[0.688rem] lg:text-xs font-semibold text-black">
                    مبلغ بیعانه
                  </span>
                  <span className="text-sm lg:text-base  font-semibold text-black">
                    ۲۵۰,۰۰۰{" "}
                    <span className="text-[0.625rem] leading-5 font-semibold text-black">
                      تومان
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[auto] flex justify-between lg:justify-normal gap-4 h-fit mt-3">
            <Link href={"/step1"}>
              <Button className="!text-black !bg-white border border-card-border !leading-[1.375rem]">
                می‌خواهم از تقویم رزرو کنم
              </Button>
            </Link>
            <Link href={"/step5"}>
              <Button>تایید رزرو</Button>
            </Link>
          </div>
        </FooterResponsive> */}
      </section>
    </section>
  );
};

export default turnReservation;
