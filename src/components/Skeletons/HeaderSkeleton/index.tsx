const HeaderSkeleton = () => {
  return (
    <div className="relative w-full flex justify-between items-center mb-[2.75rem] max-w-beauty mx-auto lg:mb-[1.875rem]">
      <div className="skeleton w-6 h-6 !rounded-lg absolute top-2/4 -translate-y-2/4 right-0 ms-5 beauty:ms-0" />
      <div className="skeleton !rounded-lg w-[7.285rem] h-10 mx-auto" />
      <div className="absolute z-10 top-2/4 -translate-y-2/4 left-0 hidden lg:flex items-center gap-2 me-5 beauty:me-0">
        <div className="skeleton w-11 h-10 rounded-lg" />
        <div className="skeleton w-[9.493rem] h-10 rounded-lg" />
        <div className="skeleton w-24 h-10 rounded-3xl" />
      </div>
    </div>
  );
};

export default HeaderSkeleton;
