import Header from "@/components/Header";
import ExpertCard from "@/components/reservation/experts/ExpertCard";
import ReservationFooter from "@/components/reservation/ReservationFooter";
import Steps from "@/components/Steps";
import { FC } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";
import { PageProps } from "../branches/page";

const Page: FC<PageProps> = (props) => {
  return (
    <section className="flex flex-col w-full h-full sm:h-fit max-w-beauty mx-auto sm:pb-[4.375rem] pt-10">
      <Header />
      <span className="hidden sm:block w-full custom-divider mb-[3.75rem]" />
      <Steps step={3} wrapperClassName="lg:!mb-24" />
      <p className="text-lg leading-[1.875rem] sm:leading-[1.625rem] font-bold text-center mb-[1.75rem] sm:mb-8 px-5 lg:px-0">
        آرایشگر مورد نظر خود را انتخاب کنید
      </p>
      <ExpertCard />
      <ReservationFooter
        activeStep={3}
        searchParams={{ ...props?.searchParams }}
        wrapperClassName="!mt-40 sm:max-w-[58.75rem] sm:mx-auto"
      />
    </section>
  );
};

export default Page;
