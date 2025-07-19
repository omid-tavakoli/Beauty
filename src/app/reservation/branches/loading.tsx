import HeaderSkeleton from "@/components/Skeletons/HeaderSkeleton";
import ReservationFooterSkeleton from "@/components/Skeletons/ReservationFooterSkeleton";
import StepSkeleton from "@/components/Skeletons/StepSkeleton";

const loading = () => {
  return (
    <div className="flex flex-col w-full h-fit max-w-screen-beauty mx-auto sm:pb-[4.375rem] pt-10">
      <HeaderSkeleton />
      <div className="hidden sm:block w-full custom-divider mb-[3.75rem]" />
      <StepSkeleton wrapperClassName="lg:!mb-24" />
      <div className="skeleton w-60 h-[1.625rem] rounded-lg mx-auto mb-[0.625rem] sm:mb-[1.875rem]" />
      <div className="mx-auto w-full max-w-[58rem] flex flex-col sm:flex-row gap-2 px-5 beauty:px-0">
        {new Array(3).fill("").map((item) => (
          <div className="flex flex-col gap-2 w-full py-[0.875rem] px-[1.125rem] border border-card-border rounded-2xl">
            <div className="skeleton h-5 w-1/4" />
            <div className="skeleton h-5 w-2/4" />
            <div className="skeleton h-4 w-full" />
          </div>
        ))}
      </div>
      <ReservationFooterSkeleton wrapperClassName="sm:mx-auto sm:max-w-[58rem] !mt-20">
        <div className="skeleton w-[6.25rem] h-10 rounded-3xl" />
        <div className="skeleton w-[6.25rem] h-10 rounded-3xl" />
      </ReservationFooterSkeleton>
    </div>
  );
};

export default loading;
