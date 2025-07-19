"use client";
import useAddQueryParams from "@/hooks/useAddQueryParams";
import { useGet } from "@/hooks/usefetch";
import { getExpertById } from "@/service/api/branch";
import { gatewayUrl } from "@/service/config/variables";
import { useSearchParams } from "next/navigation";
import { FreeMode, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import ExpertsSkeleton from "@/components/Skeletons/ExpertsSkeleton";

const ExpertCard = () => {
  const searchParams = useSearchParams();
  const addQueryParam = useAddQueryParams();

  const branchId = searchParams.get("bi");
  const serviceId = searchParams.get("si");
  const expertId = searchParams.get("ei");

  const { data: getExpert, isLoading } = useGet(
    getExpertById,
    { enable: !!branchId && !!serviceId },
    { branchId: branchId!, serviceId: serviceId! }
  );
  console.log("getExpert", getExpert);

  return (
    <>
      <div className="sm:w-full sm:mx-auto sm:max-w-[58.75rem] pb-[6.7rem] sm:pb-0">
        {isLoading ? (
          <ExpertsSkeleton />
        ) : (
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
            {getExpert?.entity?.map((item) => (
              <SwiperSlide key={item?.id}>
                <div
                  key={item?.id}
                  onClick={() => {
                    addQueryParam("ei", item.id);
                  }}
                  className="relative h-[8.75rem] sm:h-[9.5rem] flex flex-col items-center cursor-pointer"
                >
                  <div className="absolute -top-0 z-10">
                    <div className="relative w-[5.625rem] h-[5.625rem] sm:w-[6.313rem] sm:h-[6.313rem]">
                      <img
                        className=" rounded-se-[2.5rem] rounded-es-[2.5rem] "
                        src={`${gatewayUrl}${item.picture}`}
                        alt=""
                      />
                    </div>
                  </div>

                  <div
                    className={`flex w-full min-w-full h-[4.75rem] transition-[border] duration-700 border items-end justify-center border-card-border ${
                      expertId === item?.id && "border-pink-primary"
                    } rounded-2xl px-2 sm:px-4 mt-auto pb-4`}
                  >
                    <p className="text-[0.938rem] leading-5 font-semibold">
                      {`${item?.firstName ?? ""} ${item?.lastName ?? ""}`}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
};
export default ExpertCard;
