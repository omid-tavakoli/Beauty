import HeaderSkeleton from "@/components/Skeletons/HeaderSkeleton";
import ReservationFooterSkeleton from "@/components/Skeletons/ReservationFooterSkeleton";
import StepSkeleton from "@/components/Skeletons/StepSkeleton";

const loading = () => {
  return (
    <div className="flex flex-col w-full h-full sm:h-fit max-w-beauty mx-auto pt-10 sm:pb-10">
      <HeaderSkeleton />
      <div className="hidden sm:block w-full custom-divider mb-[3.75rem]" />
      <StepSkeleton wrapperClassName="!mb-[3.125rem] lg:!mb-[2.25rem]" />
      <section className="flex flex-col sm:flex-row gap-4 w-full h-full sm:h-[32.5rem] max-w-[58.125rem] mx-auto sm:px-5">
        <div className="skeleton hidden sm:flex flex-col shrink-0 w-[14.375rem] sm:h-full pt-[1.125rem] pb-3 rounded-2xl" />
        <div className="flex flex-col gap-y-2 sm:gap-y-4 w-full h-full sm:h-full px-5 sm:px-0">
          <div className="skeleton shrink-0 w-full h-[3.75rem] sm:h-10 rounded-xl" />
          <div className="flex gap-x-2 shrink-0 sm:gap-x-4 w-full h-20">
            <div className="skeleton flex flex-col items-center justify-center sm:items-start overflow-hidden h-full w-1/3 py-[0.875rem] px-3 sm:px-[1.125rem] rounded-xl sm:rounded-2xl" />
            <div className="skeleton flex flex-col items-center justify-center sm:items-start overflow-hidden h-full w-1/3 py-[0.875rem] px-3 sm:px-[1.125rem] rounded-xl sm:rounded-2xl" />
            <div className="skeleton flex flex-col items-center justify-center sm:items-start overflow-hidden h-full w-1/3 py-[0.875rem] px-3 sm:px-[1.125rem] rounded-xl sm:rounded-2xl" />
          </div>
          <div className="skeleton shrink-0 w-full h-[6.313rem] flex sm:hidden flex-col py-[0.625rem] px-[0.875rem] rounded-xl sm:rounded-2xl" />
          <div className="skeleton w-full h-full rounded-2xl" />
        </div>
      </section>
      <ReservationFooterSkeleton wrapperClassName="sm:!mt-4 sm:mx-auto sm:max-w-[58.125rem] sm:!px-5">
        <div className="skeleton hidden sm:flex w-[5.813rem] h-10" />
        <div className="skeleton sm:hidden w-[2.813rem] h-[2.813rem] rounded-full" />
        <div className="flex gap-2 h-[2.813rem] sm:h-10 sm:gap-[0.625rem]">
          <div className="skeleton w-[14.011rem] h-full rounded-3xl" />
          <div className="skeleton w-[5.041rem] h-full rounded-3xl" />
        </div>
      </ReservationFooterSkeleton>
    </div>
  );
};

export default loading;
