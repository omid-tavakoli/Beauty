"use client";
import Header from "@/components/Header";
import { useGet } from "@/hooks/usefetch";
import { getPaymentInfo } from "@/service/api/payment";
import { addCommas } from "@/service/utils/addCommas";
import { toJalaali } from "@/service/utils/date";
import { removeAreaCode } from "@/service/utils/phoneNumberEdit";
import { getUserLoginInfo } from "@/service/utils/serverAuth";
import { useRouter, useSearchParams } from "next/navigation";

const PaymentDetails = () => {
  const router = useRouter();
  const params = useSearchParams();
  const transactionId = params.get("id");

  const { data: userInfo } = useGet(getUserLoginInfo);
  const { data: paymentInfo, isLoading: paymentInfoLoading } = useGet(
    getPaymentInfo,
    { enable: !!transactionId },
    { id: transactionId }
  );

  const paymentDate = paymentInfo?.entity?.date
    ? toJalaali(paymentInfo?.entity.date)
    : undefined;
  const loadedData = paymentInfoLoading || !paymentInfo?.entity;

  return (
    <main className="py-10 md:p-10">
      <Header userInfo={userInfo} />
      <div className="flex flex-col items-center justify-center sm:w-[32.5rem] mx-auto bg-white mt-10 mb-[4.5rem]">
        <div className="w-full flex flex-col items-center">
          {loadedData ? (
            <span className="skeleton w-[130px] h-[130px] mb-8 mt-2" />
          ) : (
            <svg
              width="130"
              height="130"
              className="fill-green-400 stroke-transparent mb-8 "
            >
              <use
                href={`/assets/images/icons/payment.svg#${
                  paymentInfo?.entity?.status === 1 ? "success" : "fail"
                }-operation`}
              ></use>
            </svg>
          )}

          {loadedData ? (
            <span className="skeleton mb-8 w-80 h-12" />
          ) : (
            <h1 className="text-2xl sm:text-3xl mb-8 ">
              {paymentInfo?.entity?.status === 1
                ? "پرداخت شما با موفقیت انجام شد"
                : "پرداخت شما با خطا روبرو شد"}
            </h1>
          )}
          <div className="w-full px-7">
            <div className="flex items-center justify-between border-b-2 py-4">
              <div className="flex items-center gap-x-2 text-lg font-semibold">
                {loadedData ? (
                  <span className="skeleton w-7 h-7 rounded-full" />
                ) : (
                  <svg
                    width="28"
                    height="28"
                    className={`fill-green-400 stroke-transparent   `}
                  >
                    <use
                      href={`/assets/images/icons/payment.svg#${
                        paymentInfo?.entity?.status === 1 ? "success2" : "fail"
                      }`}
                    />
                  </svg>
                )}
                {loadedData ? (
                  <span className=" skeleton h-7 w-10 " />
                ) : (
                  <span>
                    {paymentInfo?.entity?.status === 1 ? "موفق" : "ناموفق"}
                  </span>
                )}
              </div>
              {loadedData ? (
                <span className="skeleton h-7 w-36" />
              ) : (
                <span className="text-lg font-semibold ">
                  {paymentDate?.time} - {paymentDate?.date}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between border-b-2 py-4">
              <div className="flex items-center text-lg font-semibold  ">
                شماره رسید:
              </div>
              {loadedData ? (
                <span className="skeleton h-7 w-36" />
              ) : (
                <span className="text-lg font-semibold">
                  {paymentInfo?.entity?.transactionCode}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between border-b-2 py-4">
              <div className="flex items-center text-base  ">نام خریدار:</div>
              {loadedData ? (
                <span className="skeleton h-7 w-40" />
              ) : (
                <span className="text-base">
                  {(paymentInfo?.entity?.firstName) +
                    " " +
                    paymentInfo?.entity?.lastName}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between border-b-2 py-4">
              <div className="flex items-center text-base  ">
                شماره همراه خریدار:
              </div>
              {loadedData ? (
                <span className="skeleton h-7 w-36" />
              ) : (
                <span className="text-base">
                  {removeAreaCode(paymentInfo?.entity?.phoneNumber)}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between border-b-2 py-4">
              <div className="flex items-center text-base  ">
                مبلغ پرداخت شده:
              </div>
              {loadedData ? (
                <span className="skeleton h-7 w-32" />
              ) : (
                <span className="text-base">
                  {addCommas(paymentInfo?.entity?.amount?.toString() ?? "") +
                    " "}
                  تومان
                </span>
              )}
            </div>
            <div className="flex items-center justify-between py-4 ">
              <div className="flex items-center text-base  ">شناسه پیگیری:</div>
              {loadedData ? (
                <span className="skeleton h-7 w-40" />
              ) : (
                <span className="text-base ">
                  {paymentInfo?.entity?.trackingNumber}
                </span>
              )}
            </div>
            <button
              onClick={() => router.push("dashboard/reservation")}
              className="h-10 w-full my-5  flex items-center justify-center text-sm font-semibold text-white  rounded-3xl border  bg-pink-primary"
            >
              نوبت های من
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentDetails;
