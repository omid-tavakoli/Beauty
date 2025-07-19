import HeaderSkeleton from "@/components/Skeletons/HeaderSkeleton";
import ReservationFooterSkeleton from "@/components/Skeletons/ReservationFooterSkeleton";
import StepSkeleton from "@/components/Skeletons/StepSkeleton";

const loading = () => {
  return (
    <section className="flex flex-col items-center w-full h-fit max-w-beauty mx-auto sm:pb-[4.375rem] pt-10">
      <HeaderSkeleton />
      <div className="hidden sm:block w-full custom-divider mb-[3.75rem]" />
      <StepSkeleton wrapperClassName="lg:!mb-[6.25rem]" />
      <section className="flex flex-col w-full max-w-[calc(100%-2.5rem)] sm:max-w-[34.563rem] p-5 bg-white border border-card-border rounded-tl-3xl rounded-br-3xl rounded-tr-[0.25rem] rounded-bl-[0.25rem]">
        {new Array(6).fill("").map((item, index: number) => (
          <>
            <div
              key={index}
              className={`flex justify-between mb-[1.75rem] last-of-type:!mb-0 ${
                index === 4 && "!mb-0"
              }`}
            >
              <div className="skeleton w-full h-5 rounded-lg" />
            </div>
            {index === 4 && <span className="custom-divider my-[1.75rem]" />}
          </>
        ))}
      </section>
      <ReservationFooterSkeleton wrapperClassName="sm:!mt-[3.75rem]">
        <div className="skeleton w-[6.25rem] h-10 rounded-3xl" />
        <div className="skeleton w-[6.25rem] h-10 rounded-3xl" />
      </ReservationFooterSkeleton>
    </section>
  );
};

export default loading;
