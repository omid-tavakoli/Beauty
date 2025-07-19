import ExpertsSkeleton from "@/components/Skeletons/ExpertsSkeleton";
import HeaderSkeleton from "@/components/Skeletons/HeaderSkeleton";
import ReservationFooterSkeleton from "@/components/Skeletons/ReservationFooterSkeleton";
import StepSkeleton from "@/components/Skeletons/StepSkeleton";

const loading = () => {
  return (
    <div className="flex flex-col w-full h-fit max-w-screen-beauty mx-auto sm:pb-[4.375rem] pt-10">
      <HeaderSkeleton />
      <div className="hidden sm:block w-full custom-divider mb-[3.75rem]" />
      <StepSkeleton wrapperClassName="lg:!mb-24" />
      <div className="skeleton w-60 h-[1.875rem] rounded-lg mx-auto mb-[1.75rem] sm:mb-8 px-5 lg:px-0" />
      <ExpertsSkeleton />
      <ReservationFooterSkeleton wrapperClassName="!mt-40 sm:max-w-[58.75rem] sm:mx-auto">
        <div className="skeleton w-[6.25rem] h-10 rounded-3xl" />
        <div className="flex gap-[0.625rem]">
          <div className="skeleton w-[6.25rem] h-10 rounded-3xl" />
          <div className="skeleton w-[6.25rem] h-10 rounded-3xl" />
        </div>
      </ReservationFooterSkeleton>
    </div>
  );
};

export default loading;
