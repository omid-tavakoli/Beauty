import Header from "@/components/Header";
import ReservationFooter from "@/components/reservation/ReservationFooter";
import ServicesCategories from "@/components/ServicesCategories";
import Steps from "@/components/Steps";
import { FC } from "react";
import { type PageProps } from "../branches/page";

const Page: FC<PageProps> = async (props) => {
  return (
    <section className="flex flex-col w-full h-full sm:h-fit max-w-beauty mx-auto sm:pb-[4.375rem] pt-10">
      <Header />
      <span className="hidden sm:block w-full custom-divider mb-[3.75rem]" />
      <Steps step={2} wrapperClassName="!sm:mb-[4.375rem]" />
      <ServicesCategories wrapperClassName="!h-fit pb-[5.625rem] lg:pb-0" />
      <ReservationFooter searchParams={props?.searchParams} activeStep={2} wrapperClassName="sm:!mt-20" />
    </section>
  );
};

export default Page;
