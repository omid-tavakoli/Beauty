"use client";
import AccountLayout from "@/components/AccountLayout";
import Table from "@/components/Table";
import { TableData } from "@/components/Table/TableBody";
import { useGet } from "@/hooks/usefetch";
import { getWalletTransactions } from "@/service/api/wallet";
import { addCommas } from "@/service/utils/addCommas";
import { toJalaali } from "@/service/utils/date";

const tableSections: { title: string }[] = [
  { title: "تاریخ وساعت" },
  { title: "مبلغ (تومان)" },
  { title: "نوع تراکنش" },
  { title: "توضیحات" },
];

const wallet = () => {
  const { data: wallet, isLoading: walletLoading } = useGet(
    getWalletTransactions,
    {},
    { index: 1, size: 10 }
  );
  const tableData: TableData =
    wallet?.entity?.transactions?.map((item) => [
      {
        type: "text",
        payload: toJalaali(item.date).date + " - " + toJalaali(item.date).time,
      },
      {
        type: "text",

        payload: item?.amount?.toString() ?? "",
      },
      {
        type: "badge",
        status: item?.type === 0 ? "decrease" : "increase",
        payload: item?.type === 0 ? "برداشت" : "واریز",
      },
      { type: "text", payload: item?.descirption ?? "" },
    ]) ?? [];

  return (
    <AccountLayout sectionTitle={"کیف پول"}>
      <div className="flex justify-between items-center w-full sm:h-[calc(36.188rem-5rem)] py-[1.875rem] px-5 bg-white rounded-3xl border border-card-border flex-col sm:flex-row ">
        <div className="flex flex-col">
          <p className="text-[1.125rem] leading-5 font-semibold text-black mb-[0.938rem]">
            <svg
              width="24"
              height="24"
              className="inline align-middle fill-transparent stroke-black me-[0.375rem]"
            >
              <use href={"/assets/images/icons/userAccount.svg#wallet2"}></use>
            </svg>
            موجودی حساب کاربری
          </p>
          {walletLoading ? (
            <span className="skeleton w-28 h-4 rounded-lg -[1.875rem]" />
          ) : (
            <p className="text-xs leading-5 font-normal ms-[1.875rem]">
              <span className="text-[1.125rem] leading-5 font-semibold text-green-primary me-[0.313rem]">
                {addCommas(wallet?.entity?.amount?.toString() ?? "")}
              </span>
              تومان
            </p>
          )}
        </div>
        <span className="h-fit flex justify-center items-center opacity-45 text-pink-primary border border-pink-primary py-[0.563rem] px-4 rounded-full cursor-pointer mt-2 sm:mt-0">
          درخواست انتقال موجودی به حساب بانکی
        </span>
      </div>
      <div className="w-full !h-[calc(100%-14rem)] py-[1.875rem] px-5 bg-white rounded-3xl border border-card-border">
        <div className="flex items-start justify-between mb-8">
          <p className="text-base font-semibold text-black">
            تاریخچه تراکنش ها
          </p>
          <div className="flex items-center gap-x-2 sm:gap-x-[1.875rem] text-[0.938rem] leading-5 font-medium text-black">
            <p className="cursor-pointer opacity-45 whitespace-nowrap">
              <svg
                width="24"
                height="24"
                className="inline align-middle fill-transparent stroke-black me-[0.375rem]"
              >
                <use href={"/assets/images/icons/userAccount.svg#filter"}></use>
              </svg>
              فیلتر
            </p>
            <p className="cursor-pointer opacity-45 flx flex-col ">
              <svg
                width="24"
                height="24"
                className="inline align-middle  fill-transparent stroke-black me-0 sm:me-[0.375rem]"
              >
                <use href={"/assets/images/icons/userAccount.svg#export"}></use>
              </svg>
              خروجی اکسل
            </p>
          </div>
        </div>
        <Table
          tableSections={tableSections}
          data={tableData}
          loading={walletLoading}
        />
      </div>
    </AccountLayout>
  );
};

export default wallet;
