const ServicesCategorySkeleton = () => {
  return (
    <div className="w-full h-fit pb-[5.625rem] lg:pb-0">
      <div className="!flex w-[calc(100%-2.5rem)] beauty:w-full h-[2.4rem] mb-4 custom-divider mx-auto gap-x-4">
        <div className="w-full max-w-none sm:max-w-[calc(100%-4.25rem)] flex gap-6 items-start justify-between sm:justify-normal">
          {new Array(6).fill("").map((item) => (
            <div className="skeleton w-[15%] sm:w-[10%] h-5 mt-[0.375] mb-[0.75rem] rounded-md" />
          ))}
        </div>
        <div className="w-[4.25rem] hidden sm:flex pb-2 gap-2 shrink-0">
          <div className="skeleton w-[1.875rem] h-[1.875rem] rounded-md" />
          <div className="skeleton w-[1.875rem] h-[1.875rem] rounded-md" />
        </div>
      </div>
      <div className="grid grid-rows-4 grid-cols-3 gap-2 sm:grid-rows-2 sm:grid-cols-5 sm:gap-[0.875rem] md:grid-rows-2 md:grid-cols-6 md:gap-[0.875rem] lg:grid-rows-2 lg:grid-cols-8 lg:gap-[0.875rem] w-full px-5 beauty:px-0 min-h-[15.625rem]">
        {new Array(16).fill("").map((item) => (
          <div className="skeleton flex flex-col justify-between items-center h-[7.25rem] rounded-tl-3xl rounded-br-3xl rounded-tr-[0.25rem] rounded-bl-[0.25rem]"></div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCategorySkeleton;
