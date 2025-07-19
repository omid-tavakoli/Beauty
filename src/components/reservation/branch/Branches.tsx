"use client";
import useAddQueryParams from "@/hooks/useAddQueryParams";
import { GetBranchResponse } from "@/service/api/branch";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface BranchItem {
  branches: GetBranchResponse[];
}
const Branches: FC<BranchItem> = (props) => {
  const { branches } = props;

  const addQueryParam = useAddQueryParams();
  const searchParams = useSearchParams();
  const branchId = searchParams.get("bi");

  const [selectedBranch, setSelectedBranch] = useState({
    id: "",
    title: "",
  });

  useEffect(() => {
    if (!!branchId) setSelectedBranch({ id: branchId, title: "" });
  }, [branchId]);

  return (
    <>
      {branches?.map((branch, i) => (
        <div
          className={`flex flex-col gap-2  bg-white w-[calc(100%-1rem)] py-[0.875rem] px-[1.125rem] border border-card-border transition-all duration-[600ms] rounded-2xl ${
            selectedBranch?.id === branch?.id &&
            "!border-pink-primary shadow-md"
          } cursor-pointer`}
          onClick={() => {
            setSelectedBranch({
              id: branch?.id,
              title: branch?.title,
            });
            addQueryParam("bi", branch?.id);
          }}
        >
          <p className="text-sm font-medium text-black/50">شعبه {i + 1}</p>
          <p className="text-base leading-5 font-semibold text-Black">
            {branch?.title}
          </p>
          <span className="text-xs font-semibold text-black">
            {branch?.address}
          </span>
        </div>
      ))}
    </>
  );
};

export default Branches;
