import { ReactNode } from "react";

const ReservationFooterSkeleton = ({
  wrapperClassName,
  children,
}: {
  wrapperClassName?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`fixed bottom-0 z-30 w-full h-[4.875rem] bg-white lg:bg-transparent lg:h-auto flex items-center justify-between py-4 px-5 lg:py-0 lg:static beauty:px-0 ${wrapperClassName}`}
    >
      {children}
    </div>
  );
};

export default ReservationFooterSkeleton;
