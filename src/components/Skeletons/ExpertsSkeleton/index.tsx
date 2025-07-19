const ExpertsSkeleton = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-2 gap-2 sm:grid-rows-1 sm:grid-cols-3 sm:gap-4 md:grid-rows-1 md:grid-cols-4 md:gap-4 lg:grid-rows-1 lg:grid-cols-5 lg:gap-4 sm:w-full sm:mx-auto sm:max-w-[58.75rem] pb-[6.7rem] lg:pb-0 w-full !px-5 sm:!px-0">
      {new Array(5).fill("").map((item) => (
        <div className="relative h-[8.75rem] sm:h-[9.5rem] flex flex-col items-center">
          <div className="absolute -top-0 z-10">
            <div className="skeleton w-[5.625rem] h-[5.625rem] sm:w-[6.313rem] sm:h-[6.313rem] rounded-se-[2.5rem] rounded-es-[2.5rem]" />
          </div>
          <div
            className={`flex w-full min-w-full h-[4.75rem] border items-end justify-center border-card-border rounded-2xl px-2 sm:px-4 mt-auto pb-4`}
          >
            <div className="skeleton w-24 h-4 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpertsSkeleton;
