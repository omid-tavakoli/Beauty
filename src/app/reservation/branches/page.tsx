import Header from "@/components/Header";
import Branches from "@/components/reservation/branch/Branches";
import ReservationFooter from "@/components/reservation/ReservationFooter";
import Steps from "@/components/Steps";
import { getBranch } from "@/service/api/branch";
import { FC } from "react";

export interface PageProps {
  params: {};
  searchParams: { bi?: string; si?: string; ei: string };
}
const Page: FC<PageProps> = async (props) => {
  const { entity: branchData } = await getBranch();

  return (
    <section className="flex flex-col w-full h-full sm:h-fit max-w-beauty mx-auto sm:pb-[4.375rem] pt-10">
      <Header />
      <span className="hidden sm:block w-full custom-divider mb-[3.75rem]" />
      <Steps step={1} wrapperClassName="lg:!mb-24" />
      <p className="text-lg leading-[1.625rem] font-bold text-center mb-[0.625rem] lg:mb-[1.875rem]">
        شعبه مورد نظر خود را انتخاب کنید
      </p>
      <div className="mx-auto w-full h-full flex-wrap max-w-[58rem] flex flex-col sm:flex-row gap-2 px-5 pb-[5.625rem] sm:pb-0 beauty:px-0">
        <Branches branches={branchData} />
      </div>
      <ReservationFooter
        activeStep={1}
        searchParams={{ ...props?.searchParams }}
        wrapperClassName="sm:mx-auto sm:max-w-[58rem] !mt-20"
      />
    </section>
  );
};

export default Page;
