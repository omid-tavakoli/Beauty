"use client";
import Header from "@/components/Header";
import EmploymentForm from "@/components/recruitment/EmploymentForm";
import Badge from "@/components/theme/Badge";
import { useState } from "react";

const employmentNotices = [
  {
    id: 1,
    type: "nail",
    title: "ناخن",
    services: "(لاین های کاشت ,ژلیش,لمینت)",
    branch: "شعبه تهرانپارس",
    location: "تهران",
    instantaneous: false,
    createdAt: "لحظاتی پیش",
  },
  {
    id: 2,
    type: "nail",
    title: "ناخن",
    services: "(لاین های کاشت ,ژلیش,لمینت)",
    branch: "شعبه تهرانپارس",
    location: "تهران",
    instantaneous: false,
    createdAt: "3 دقیقه پیش",
  },
  {
    id: 3,
    type: "nail",
    title: "ناخن",
    services: "(لاین های کاشت ,ژلیش,لمینت)",
    branch: "شعبه تهرانپارس",
    location: "تهران",
    instantaneous: true,
    createdAt: "3 دقیقه پیش",
  },
  {
    id: 4,
    type: "hair",
    title: "مو",
    services: "(لاین کوتاهی مو)",
    branch: "شعبه ایرانمال",
    location: "تهران",
    instantaneous: false,
    createdAt: "لحظاتی پیش",
  },
  {
    id: 5,
    type: "hair",
    title: "مو",
    services: "(لاین کوتاهی مو)",
    branch: "شعبه ایرانمال",
    location: "تهران",
    instantaneous: false,
    createdAt: "3 دقیقه پیش",
  },
  {
    id: 6,
    type: "hair",
    title: "مو",
    services: "(لاین کوتاهی مو)",
    branch: "شعبه ایرانمال",
    location: "تهران",
    instantaneous: false,
    createdAt: "3 دقیقه پیش",
  },
  {
    id: 7,
    type: "hair",
    title: "مو",
    services: "(لاین رنگ و لایت)",
    branch: "شعبه تهرانپارس",
    location: "تهران",
    instantaneous: false,
    createdAt: "لحظاتی پیش",
  },
  {
    id: 8,
    type: "hair",
    title: "مو",
    services: "(لاین رنگ و لایت)",
    branch: "شعبه تهرانپارس",
    location: "تهران",
    instantaneous: false,
    createdAt: "3 دقیقه پیش",
  },
  {
    id: 9,
    type: "hair",
    title: "مو",
    services: "(لاین رنگ و لایت)",
    branch: "شعبه تهرانپارس",
    location: "تهران",
    instantaneous: false,
    createdAt: "3 دقیقه پیش",
  },
  {
    id: 10,
    type: "eyelash",
    title: "مژه",
    services: "(لاین های لیفت و اکستنشن)",
    branch: "شعبه تهرانپارس",
    location: "تهران",
    instantaneous: false,
    createdAt: "لحظاتی پیش",
  },
  {
    id: 11,
    type: "eyelash",
    title: "مژه",
    services: "(لاین های لیفت و اکستنشن)",
    branch: "شعبه تهرانپارس",
    location: "تهران",
    instantaneous: false,
    createdAt: "3 دقیقه پیش",
  },
  {
    id: 12,
    type: "eyelash",
    title: "مژه",
    services: "(لاین های لیفت و اکستنشن)",
    branch: "شعبه تهرانپارس",
    location: "تهران",
    instantaneous: false,
    createdAt: "3 دقیقه پیش",
  },
];

const recruitment = () => {
  const icons: { [key: string]: string } = {
    nail: "nail",
    hair: "hair",
    eyelash: "eyelash",
  };
  const [isShowEmploymentForm, setIsShowEmploymentForm] = useState(false);
  return (
    <section className="flex flex-col w-full h-full max-w-beauty mx-auto py-5 sm:pt-[2.5rem] sm:pb-[4.375rem]">
      <Header wrapperClassName="!mb-5 sm:!mb-[1.875rem]" />
      <span className="custom-divider mb-5 sm:mb-10" />
      {!isShowEmploymentForm ? (
        <div className="w-full h-full flex flex-col gap-y-5 px-5 beauty:px-0 pb-4 sm:pb-[10.25rem]">
          <div className="flex items-center justify-start p-[1.5rem] w-full h-16 bg-white rounded-2xl py-[1.5rem] text-xl leading-[1.563rem] font-medium text-black">
            آگهی های استخدام
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
            {employmentNotices?.map((item) => (
              <div
                key={item?.id}
                onClick={() => setIsShowEmploymentForm(true)}
                className="relative w-full flex gap-x-[2.25rem] bg-white p-[0.313rem] sm:p-[0.625rem] ps-[1.563rem] rounded-tl-[2.25rem] rounded-tr-sm rounded-br-[2.25rem] rounded-bl-sm cursor-pointer"
              >
                <svg width="40" height="40" className="flex-shrink-0">
                  <use
                    href={`assets/images/icons/recruitment.svg#${
                      icons[item?.type]
                    }`}
                  ></use>
                </svg>
                <div className="w-full flex flex-col gap-y-2">
                  <p className="inline-block text-sm leading-[1.125rem] font-semibold text-pink-primary">
                    {item?.title}
                    {item?.instantaneous && (
                      <Badge className="!inline-block !h-[auto] align-middle !bg-pink-80 !text-pink-primary !px-[0.625rem] !py-[0.188rem] ms-[0.625rem]">
                        فوری
                      </Badge>
                    )}
                  </p>
                  <p className="text-[0.813rem] leading-4 font-normal text-black/45">
                    {item?.services}
                  </p>
                  <p>
                    <svg
                      width="16"
                      height="16"
                      className="inline align-middle me-[0.188rem]"
                    >
                      <use
                        href={"assets/images/icons/recruitment.svg#branch"}
                      ></use>
                    </svg>
                    {item?.branch}
                  </p>
                  <p>
                    <svg
                      width="16"
                      height="16"
                      className="inline align-middle me-[0.188rem]"
                    >
                      <use
                        href={"assets/images/icons/recruitment.svg#location"}
                      ></use>
                    </svg>
                    {item?.location}
                  </p>
                  <span className="absolute left-[0.625rem] bottom-[0.625rem] text-xs leading-[0.875rem] font-normal text-black/45">
                    {item?.createdAt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <EmploymentForm />
      )}
    </section>
  );
};

export default recruitment;
