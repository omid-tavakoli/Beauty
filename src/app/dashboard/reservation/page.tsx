"use client";
import AccountLayout from "@/components/AccountLayout";
import FeedbackModal from "@/components/dashboard/reservation/FeedbackModal";
import Button from "@/components/theme/Button";
import { useGet, useMutate } from "@/hooks/usefetch";
import {
  GetReservationPayLinkResponse,
  GetUserReservationResponse,
  ReservationStatus,
  cancelReserveByUser,
  getReservationPayLink,
  getUserReservation,
} from "@/service/api/revervation";
import { frontUrl } from "@/service/config/variables";
import { addCommas } from "@/service/utils/addCommas";
import { toJalaali } from "@/service/utils/date";
import { openModalHandler } from "@/service/utils/modalHandler";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Modal = dynamic(() => import("@/components/Modal"), {
  ssr: false,
});

const waitingReserve = ReservationStatus.Paid.toString();
const finishReserve = [
  ReservationStatus.Accepted,
  ReservationStatus.finish,
].join(",");
const cancelReserve = [
  ReservationStatus.Canceled,
  ReservationStatus.CanceledWithCashBack,
  ReservationStatus.CanceledByAdmin,
  ReservationStatus.Rejected,
].join(",");
const waitingForPayReserve = [
  ReservationStatus.PreReserve,
  ReservationStatus.RequestToOrder,
].join(",");
const status = [
  {
    id: waitingReserve,
    title: "در انتظار نوبت",
  },
  {
    id: finishReserve,
    title: "انجام شده",
  },
  {
    id: cancelReserve,
    title: "لغو شده",
  },
  {
    id: waitingForPayReserve,
    title: "درانتظار پرداخت",
  },
];
const page = () => {
  const router = useRouter();

  const [isActiveTab, setIsActiveTab] = useState(status[0]);
  const [selectedReserve, setSelectedReserve] = useState<
    GetUserReservationResponse | undefined
  >();
  const [paymentInfo, setPaymentInfo] = useState<
    GetReservationPayLinkResponse["paymentDetail"] | null
  >(null);

  const {
    data: userReservation,
    refetch: userReservationRefetch,
    isLoading: userReservationLoading,
  } = useGet(getUserReservation, {}, isActiveTab.id);

  const { mutate: cancelReserveByUserMutate, isLoading: cancelReserveLoading } =
    useMutate(cancelReserveByUser);
  const { mutate: payLinkMutate, isLoading: payLinkLoading } = useMutate(
    getReservationPayLink
  );

  const submitPayHandler = (reserveId: string) => {
    if (isActiveTab.id === waitingForPayReserve && reserveId)
      payLinkMutate({
        args: {
          ReservationId: reserveId,
          UrlToCallbackIfWalletNeedToCharge: frontUrl + "/payment-details",
        },
        fn: {
          onSuccess(response) {
            switch (response.code) {
              case 200:
                {
                  if (!response?.entity) {
                    router?.replace("/dashboard/reservation");
                  } else {
                    router.replace(
                      `${frontUrl}/payment-details${response?.entity?.paymentDetail?.url}`
                    );
                  }
                }

                break;
              case 203:
                {
                  setPaymentInfo(response?.entity?.paymentDetail);
                  setTimeout(() => {
                    //@ts-ignore
                    document?.getElementById("paymentInfo").submit();
                  }, 3);
                }

                break;

              default:
                router?.replace("/dashboard/reservation");
                break;
            }
          },
        },
      });
  };

  const actionHandler = (id: string) => {
    if (isActiveTab.id === waitingReserve) {
      cancelReserveByUserMutate({
        args: {
          ReservationId: id,
        },
        fn: {
          onSuccess() {
            userReservationRefetch();
          },
        },
      });
    }
  };

  useEffect(() => {
    userReservationRefetch();
  }, [isActiveTab]);

  return (
    <AccountLayout sectionTitle={"نوبت های من"}>
      <div className="w-full sm:h-[calc(36.188rem-5rem)] pt-3 pb-5 bg-white rounded-3xl border border-card-border">
        <div className="!flex w-[calc(100%-2.5rem)] h-8 mb-4 custom-divider mx-auto">
          <ul className="w-full flex justify-between sm:justify-start gap-x-10 overflow-x-auto overflow-y-auto hide-scrollbar">
            {status?.map((item) => (
              <li
                key={item?.title}
                onClick={() => setIsActiveTab(item)}
                className={`services-categories !font-semibold whitespace-nowrap ${
                  item?.id === isActiveTab?.id
                    ? "text-pink-primary after:!w-full before:!w-full"
                    : ""
                }`}
              >
                {item?.title}
              </li>
            ))}
          </ul>
        </div>
        <div
          dir="ltr"
          className="w-full h-full sm:max-h-[calc(100%-3rem)] sm:overflow-y-auto sm:custom-scrollBar sm:mx-1"
        >
          <div dir="rtl" className=" flex flex-col gap-y-4 w-full pe-6 ps-3">
            {userReservationLoading ? (
              <div className="bg-[rgba(var(--primary-rgb),0.1)] p-5 rounded-tr-[0.25rem] rounded-tl-3xl rounded-bl-[0.25rem] rounded-br-3xl">
                <p className="text-[0.875rem] leading-5 font-bold text-black mb-6 sm:mb-[0.625rem]"></p>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5 md:gap-y-[2.25rem] gap-x-20 sm:gap-x-5">
                  <div className="flex flex-col gap-y-1">
                    <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                      تاریخ نوبت
                    </p>
                    <span className="skeleton w-32 h-4 rounded-lg" />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                      ساعت نوبت
                    </p>
                    <span className="skeleton w-32 h-4 rounded-lg" />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                      آرایشگر
                    </p>
                    <span className="skeleton w-32 h-4 rounded-lg" />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                      تاریخ ثبت نوبت
                    </p>
                    <span className="skeleton w-32 h-4 rounded-lg" />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                      شعبه
                    </p>
                    <span className="skeleton w-32 h-4 rounded-lg" />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                      مبلغ بیعانه
                    </p>
                    <span className="skeleton w-32 h-4 rounded-lg" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                      نوع پرداخت
                    </p>
                    <div className="flex items-center gap-x-[0.375rem]">
                      <span className="skeleton w-32 h-4 mt-1.5 rounded-lg" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                      وضعیت پرداخت
                    </p>
                    <span className="skeleton w-32 h-4 rounded-lg" />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                      شماره پیگیری
                    </p>
                    <span className="skeleton w-32 h-4 rounded-lg" />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                      درگاه:
                    </p>
                    <span className="skeleton w-32 h-4 rounded-lg" />
                  </div>
                  <Button
                    onClick={() => openModalHandler("CancelReserveModal")}
                    className="self-end h-10 w-[6.25rem] !leading-[1.375rem] !text-black !bg-white border border-button-border"
                  >
                    لغو رزرو
                  </Button>
                </div>
              </div>
            ) : (
              userReservation?.entity?.map((reserve) => (
                <div className="bg-[rgba(var(--primary-rgb),0.1)] p-5 rounded-tr-[0.25rem] rounded-tl-3xl rounded-bl-[0.25rem] rounded-br-3xl">
                  <p className="text-[0.875rem] leading-5 font-bold text-black mb-6 sm:mb-[0.625rem]">
                    {reserve.fields.map((item) => item.serviceTitle).join(",")}
                  </p>
                  <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5 md:gap-y-[2.25rem] gap-x-20 sm:gap-x-5">
                    <div className="flex flex-col gap-y-1">
                      <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                        تاریخ نوبت
                      </p>
                      <span className="text-black text-[0.813rem] leading-5 font-normal">
                        {reserve.date ? toJalaali(reserve.date).date : <></>}
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                        ساعت نوبت
                      </p>
                      <span className="text-black text-[0.813rem] leading-5 font-normal">
                        {reserve.date ? toJalaali(reserve.date).time : <></>}
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                        آرایشگر
                      </p>
                      <span className="text-black text-[0.813rem] leading-5 font-normal break-words">
                        {reserve?.personnelFirstName}
                        {reserve?.personnelLastName}
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                        تاریخ ثبت نوبت
                      </p>
                      <span className="text-black text-[0.813rem] leading-5 font-normal">
                        {reserve.createDate ? (
                          toJalaali(reserve.createDate).date
                        ) : (
                          <></>
                        )}
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                        شعبه
                      </p>
                      <span className="text-black text-[0.813rem] leading-5 font-normal break-words">
                        {reserve.branchTitle}
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                        مبلغ بیعانه
                      </p>
                      <span className="text-black text-[0.813rem] leading-5 font-normal break-words">
                        {reserve?.prepay ? (
                          addCommas(reserve?.prepay.toString())
                        ) : (
                          <></>
                        )}
                        <span className="ms-0.5">تومان</span>
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                        نوع پرداخت
                      </p>
                      <div className="flex items-center gap-x-[0.375rem]">
                        <span className="text-black text-[0.813rem] leading-5 font-normal">
                          آنلاین
                        </span>
                        <span className="flex items-center justify-center w-[2.938rem] h-6 text-[0.688rem] leading-5 font-semibold px-3 bg-green-badge text-green-badge-color rounded-[30px]">
                          موفق
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                        وضعیت پرداخت
                      </p>
                      <span className="text-black text-[0.813rem] leading-5 font-normal">
                        {reserve?.paymentStatus}
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                        شماره پیگیری
                      </p>
                      <span className="text-black text-[0.813rem] leading-5 font-normal">
                        {reserve?.transactionCode ?? "----"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-black/65 text-[0.813rem] leading-5 font-normal">
                        درگاه:
                      </p>
                      <span className="text-black text-[0.813rem] leading-5 font-normal">
                        {reserve?.paymentGateway ?? "----"}
                      </span>
                    </div>
                    {(isActiveTab.id !== cancelReserve ||
                      reserve?.step === ReservationStatus.CanceledByAdmin) &&
                      !reserve?.isCommentWrited && (
                        <Button
                          disabled={cancelReserveLoading || payLinkLoading}
                          onClick={() => {
                            switch (isActiveTab.id) {
                              case waitingReserve:
                                {
                                  actionHandler(reserve.id);
                                }
                                break;

                              case finishReserve: {
                                setSelectedReserve(reserve);
                                openModalHandler("registerComment");
                              }
                              case waitingForPayReserve:
                                {
                                  console.log("run");

                                  submitPayHandler(reserve.id);
                                }

                                break;
                            }
                          }}
                          className="self-end h-10 w-[6.25rem] !leading-[1.375rem] !text-black !bg-white border border-button-border"
                        >
                          {isActiveTab?.id === waitingReserve
                            ? "لغو رزرو"
                            : isActiveTab?.id === finishReserve
                            ? "ثبت نظر"
                            : isActiveTab?.id === waitingForPayReserve
                            ? "پرداخت"
                            : "عودت پرداخت"}
                        </Button>
                      )}
                  </div>
                </div>
              ))
            )}
          </div>

          <FeedbackModal reserve={selectedReserve} />
        </div>
      </div>
      {isActiveTab.id === waitingForPayReserve && (
        <form
          action={paymentInfo?.url}
          id="paymentInfo"
          method="post"
          className="hidden"
        >
          <input
            type="hidden"
            value={paymentInfo?.form?.CommandType}
            name="CommandType"
          />
          <input
            type="hidden"
            value={paymentInfo?.form?.trackingNumber}
            name="trackingNumber"
          />
          <input
            type="hidden"
            value={paymentInfo?.form?.amount}
            name="amount"
          />
          <input
            type="hidden"
            value={paymentInfo?.form?.redirectUrl}
            name="redirectUrl"
          />
        </form>
      )}
    </AccountLayout>
  );
};

export default page;
