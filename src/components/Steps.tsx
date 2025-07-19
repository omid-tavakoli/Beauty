"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

export interface Step {
  id: number;
  link: string;
  title: string;
}

export interface IProps {
  wrapperClassName?: string;
  step: number;
}

const steps: Step[] = [
  { id: 1, title: "شعبه", link: "branches" },
  { id: 2, title: "خدمت زیبایی", link: "services" },
  { id: 3, title: "آرایشگر", link: "experts" },
  { id: 4, title: "تاریخ و ساعت", link: "times" },
  { id: 5, title: "رزرو و پرداخت بیعانه", link: "factor" },
];

const Steps: FC<IProps> = (props) => {
  const { step: activeStep } = props;
  const searchParams = useSearchParams();
  const branchId = searchParams.get("bi");
  const serviceId = searchParams.get("si");
  const expertId = searchParams.get("ei");

  return (
    <section
      className={`w-full lg:!w-fit max-w-[calc(100%-3rem)] md:max-w-[calc(100%-14rem)] lg:max-w-none mx-auto flex justify-between lg:gap-x-2 mb-[5.125rem] lg:mb-[3.125rem] ${props?.wrapperClassName}`}
    >
      {steps?.map((step, index: number) => (
        <>
          <Link
            href={
              activeStep > step?.id
                ? `${steps[index]?.link}?${
                    step?.id === 1 ? `bi=${branchId}` : ""
                  }${step?.id === 2 ? `bi=${branchId}&si=${serviceId}` : ""}${
                    step?.id === 3 || step?.id === 4 || step?.id === 5
                      ? `bi=${branchId}&si=${serviceId}&ei=${expertId}`
                      : ""
                  }`
                : ""
            }
            className="hidden lg:flex items-center w-full lg:!w-fit"
            key={step?.id}
          >
            <svg
              height="17"
              width="17"
              className={`cursor-pointer ${
                activeStep < +step?.id ? "fill-gray-300" : "fill-pink-primary"
              } me-1`}
            >
              <use href={"/assets/images/icons/reservation.svg#star"}></use>
            </svg>
            <p
              className={`cursor-pointer text-lg leading-[1.625rem] ${
                activeStep < +step?.id
                  ? "font-medium  opacity-70"
                  : "font-bold "
              } me-2 text-black`}
            >
              {step?.title}
            </p>
            <span
              className={`block w-[3.563rem] h-px ${
                activeStep < +step?.id ? "bg-gray-300" : "bg-pink-primary"
              } ${steps?.length - 1 === index && "!hidden"}`}
            />
          </Link>

          <Link
            href={
              activeStep > step?.id
                ? `${steps[index]?.link}?${
                    step?.id === 1 ? `bi=${branchId}` : ""
                  }${step?.id === 2 ? `bi=${branchId}&si=${serviceId}` : ""}${
                    step?.id === 3
                      ? `bi=${branchId}&si=${serviceId}&ei=${expertId}`
                      : ""
                  }`
                : ""
            }
            key={step?.id}
            className="relative flex lg:hidden w-full last-of-type:!w-fit items-center"
          >
            <svg
              height="17"
              width="17"
              className={`${
                activeStep < +step?.id ? "fill-gray-300" : "fill-pink-primary"
              } me-2`}
            >
              <use href={"/assets/images/icons/reservation.svg#star"}></use>
            </svg>
            <p
              className={`w-16 absolute -right-[1.5rem] text-center top-4 text-xs leading-5 mt-2 ${
                activeStep < +step?.id
                  ? "font-medium text-gray-600"
                  : "font-bold text-black"
              }`}
            >
              {index === steps?.length - 1 ? "پرداخت" : step?.title}
            </p>

            <span
              className={`block w-[calc(100%-2rem)] h-px ${
                activeStep < +step?.id && steps?.length - 1 !== index
                  ? "bg-gray-300"
                  : "bg-black"
              } ${steps?.length - 1 === index && "!hidden"}`}
            />
          </Link>
        </>
      ))}
    </section>
  );
};

export default Steps;
