"use client";
import { FC, useEffect, useState } from "react";
import Badge from "../theme/Badge";
import { GetBranchResponse, workTimes } from "@/service/api/branch";
import dynamic from "next/dynamic";
import { openModalHandler } from "@/service/utils/modalHandler";
import WorkTimeModal, { Vacation } from "../WorkTime/WorkTimeModal";
import Link from "next/link";
const DynamicMap = dynamic(() => import("../../components/landing/map"), {
  ssr: false,
});
interface BranchItem {
  data: GetBranchResponse[];
}

const contactUsBranch: FC<BranchItem> = (props) => {
  const { data } = props;
  const [map, setMap] = useState<L.Map | undefined>(undefined);
  const [workTime, setWorkTime] = useState<[workTimes]>();

  useEffect(() => {
    data.map((item) => {
      map?.flyTo({ lng: item.longitude, lat: item.latitude }, 19);
    });
  }, [data]);
  return (
    <>
      {data.map((item) => (
        <div className="w-full h-[auto] sm:h-[14rem] flex flex-col sm:flex-row sm:justify-between rounded-3xl bg-white p-[0.625rem] sm:p-4 sm:ps-[1.375rem]">
          <div className="flex flex-col h-full mb-5 sm:mb-0">
            <div className="flex items-center gap-x-[0.625rem] mb-[0.625rem] sm:mt-[0.375rem]">
              <p className="text-[1.125rem] font-bold text-black">
                {item.title}
              </p>
              {item.isOrigin && (
                <Badge className="w-20 h-7 whitespace-nowrap text-xs  bg-[rgba(var(--primary-rgb),0.1)] text-pink-primary">
                  شعبه اصلی
                </Badge>
              )}
            </div>
            <p className="text-sm leading-4 font-normal text-black mb-[0.625rem] sm:mb-auto">
              {item.address}
            </p>
            <div className="flex flex-wrap gap-x-4 sm:gap-x-0 sm:grid grid-cols-2 lg:grid-cols-3 items-center gap-y-[0.625rem] lg:gap-y-0">
              <div className="flex items-center gap-x-[0.375rem]">
                <div className="flex items-center justify-center py-[0.375rem] px-[0.438rem] rounded-lg bg-[rgba(var(--primary-rgb),0.5)] me-[0.375rem]">
                  <svg
                    width="24"
                    height="24"
                    className="stroke-none fill-pink-primary"
                  >
                    <use href={"assets/images/icons/contactUs.svg#phone"}></use>
                  </svg>
                </div>
                <div className="flex flex-col gap-y-[0.188rem] text-xs font-normal text-black/60">
                  <p>شماره تماس</p>
                  <p>
                    {item.tel.split("-")[0]}
                    <span className="text-[0.938rem] leading-[1.375rem] font-bold text-black me-[0.188rem]">
                      {item.tel.split("-")[1]}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-[0.375rem]">
                <div className="flex items-center justify-center py-[0.375rem] px-[0.438rem] rounded-lg bg-[rgba(var(--primary-rgb),0.5)] me-[0.375rem]">
                  <svg
                    width="24"
                    height="24"
                    className="stroke-none fill-pink-primary"
                  >
                    <use href={"assets/images/icons/contactUs.svg#clock"}></use>
                  </svg>
                </div>
                <div
                  className="flex flex-col gap-y-[0.188rem] text-xs font-normal text-black cursor-pointer"
                  onClick={() => {
                    openModalHandler("WorkTimeModal"),
                      setWorkTime(item.workTimes);
                  }}
                >
                  <p className=" text-xs text-opacity-50 text-black font-normal mb-1">
                    ساعت کاری
                  </p>
                  <div className="flex gap-x-0.5 text-[0.813rem] leading-[1.375rem] font-bold">
                    <span>مشاهده همه ساعت‌ها</span>
                    <span>
                      <svg
                        width="20"
                        height="20"
                        className="fill-pink-primary "
                      >
                        <use
                          href={
                            "/assets/images/icons/arrow-left3.svg2#arrow-left"
                          }
                        ></use>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-[0.375rem] w-max">
                <div className="flex items-center justify-center py-[0.375rem] px-[0.438rem] rounded-lg bg-[rgba(var(--primary-rgb),0.5)] me-[0.375rem]">
                  <svg
                    width="24"
                    height="24"
                    className="stroke-none fill-pink-primary"
                  >
                    <use href={"assets/images/icons/contactUs.svg#clock"}></use>
                  </svg>
                </div>
                <div className="flex flex-col gap-y-[0.188rem] text-xs font-normal text-black/60">
                  <p>تعطیلی ها</p>
                  <span className="text-[0.938rem] leading-[1.375rem] font-bold text-black">
                    {item.workTimes
                      .map((work) =>
                        work.to === "00:00:00" && work.from === "00:00:00"
                          ? Vacation[+work.dayOfWeek].dayOfWeek
                          : null
                      )
                      .filter((day) => day)
                      .join(",")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-[0.625rem]">
            <DynamicMap
              onMapInit={(map, L, markerIcon) => {
                L.marker([item?.latitude, item?.longitude], {
                  icon: markerIcon,
                }).addTo(map);

                map?.flyTo(
                  {
                    lat: item?.latitude ?? 0,
                    lng: item?.longitude ?? 0,
                  },
                  19,
                  {
                    animate: false,
                  }
                );
              }}
              className="w-[18.75rem] sm:!w-[13.125rem] !h-[7.5rem] sm:!h-[9.5rem] rounded-[1.25rem]"
            />
            <Link
              target="_blank"
              href={`https://www.google.com/maps?daddr=${item?.latitude},${item?.longitude}`}
              className="bg-white button border border-[rgba(var(--primary-rgb),0.3)] text-pink-primary !h-8"
            >
              مسیریابی
            </Link>
          </div>
        </div>
      ))}
      <WorkTimeModal data={workTime} />
    </>
  );
};

export default contactUsBranch;
