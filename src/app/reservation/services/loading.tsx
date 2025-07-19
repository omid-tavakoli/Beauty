
import HeaderSkeleton from "@/components/Skeletons/HeaderSkeleton";import ReservationFooterSkeleton from "@/components/Skeletons/ReservationFooterSkeleton";
import ServicesCategorySkeleton from "@/components/Skeletons/ServicesCategorySkeleton";
import StepSkeleton from "@/components/Skeletons/StepSkeleton";

const loading = () => {
  return (
    <div className="flex flex-col w-full h-fit max-w-beauty mx-auto sm:pb-[4.375rem] pt-10">
      <HeaderSkeleton />
      <div className="hidden sm:block w-full custom-divider mb-[3.75rem]" />
      <StepSkeleton wrapperClassName="!sm:mb-[4.375rem]" />
      <ServicesCategorySkeleton />
      <ReservationFooterSkeleton wrapperClassName="sm:!mt-20" >
        <div className="skeleton w-[6.25rem] h-10 rounded-3xl" />
        <div className="skeleton w-[6.25rem] h-10 rounded-3xl" />
      </ReservationFooterSkeleton>
    </div>
  );
};

export default loading;
