const array = [1, 2, 3, 4, 5];
const StepSkeleton = ({ wrapperClassName }: { wrapperClassName?: string }) => {
  return (
    <div
      className={`w-full lg:!w-fit max-w-[calc(100%-3rem)] md:max-w-[calc(100%-14rem)] lg:max-w-none mx-auto flex justify-between lg:gap-x-2 mb-[5.125rem] lg:mb-[3.125rem] ${wrapperClassName}`}
    >
      {array.map((item, index) => (
        <>
          <div className="hidden lg:flex items-center w-full lg:!w-fit">
            <div className="skeleton w-[1.063rem] h-[1.063rem] me-1 rounded-md" />
            <div className="skeleton w-20 h-[1.625rem] me-2 rounded-lg" />
            <div
              className={`skeleton w-[3.563rem] h-px rounded-lg ${
                array.length - 1 === index && "!hidden"
              }`}
            />
          </div>
          <div className="relative flex lg:hidden w-full last-of-type:!w-fit items-center">
            <div className="skeleton w-[1.063rem] h-[1.063rem] me-2 rounded-md" />
            <div className="skeleton w-16 h-[1.625rem] rounded-lg absolute top-4 -right-[1.5rem] mt-2" />
            <div
              className={`skeleton w-[calc(100%-2rem)] h-0.5 rounded-lg ${
                array.length - 1 === index && "!hidden"
              }`}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default StepSkeleton;
