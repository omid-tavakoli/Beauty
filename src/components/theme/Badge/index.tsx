import { ReactNode } from "react";

const Badge = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`h-[2.125rem] flex items-center justify-center text-sm py-[0.375rem] px-5 pb-1 font-normal text-black bg-green-badge rounded-full ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
