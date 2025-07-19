"use client";
import Header from "@/components/Header";
import Steps from "@/components/Steps";
import { useGet, useMutate } from "@/hooks/usefetch";
import {
  GetReservationPayLinkResponse,
  getReservationInfoById,
  getReservationPayLink,
} from "@/service/api/revervation";
import { addCommas } from "@/service/utils/addCommas";
import { toJalaali } from "@/service/utils/date";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useState } from "react";
import { PageProps } from "../branches/page";
import ReservationFooter from "@/components/reservation/ReservationFooter";

const Page: FC<PageProps> = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const reservationId = searchParams.get("ri");

  const [paymentInfo, setPaymentInfo] = useState<
    GetReservationPayLinkResponse["paymentDetail"] | null
  >(null);

  const { data: reservationInfo, isLoading } = useGet(
    getReservationInfoById,
    { enable: !!reservationId },
    reservationId!
  );
  const { mutate: payLinkMutate } = useMutate(getReservationPayLink);

  const reservationDate = toJalaali(
    reservationInfo?.entity?.reservationFields?.[0]?.date
  );

  const submitPayHandler = () => {
    reservationId &&
      payLinkMutate({
        args: {
          ReservationId: reservationId,
          UrlToCallbackIfWalletNeedToCharge:
            "http://localhost:3000/payment-details",
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
                      `http://localhost:3000/payment-details${response?.entity?.paymentDetail?.url}`
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

  return (
    <section className="flex flex-col items-center w-full h-fit max-w-beauty mx-auto sm:pb-[4.375rem] pt-10">
      <Header />
      <span className="hidden sm:block w-full custom-divider mb-[3.75rem]" />
      <Steps step={5} wrapperClassName="lg:!mb-[6.25rem]" />
      <section className="flex flex-col w-full max-w-[calc(100%-2.5rem)] sm:max-w-[34.563rem] p-5 bg-white border border-card-border rounded-tl-3xl rounded-br-3xl rounded-tr-[0.25rem] rounded-bl-[0.25rem]">
        <div className="flex justify-between mb-[1.75rem]">
          <p className="text-sm font-medium text-black/50">شعبه</p>
          {isLoading ? (
            <div className="skeleton w-32 h-4 rounded-lg" />
          ) : (
            <span className="text-sm sm:text-base leading-5 font-semibold">
              {reservationInfo?.entity?.reservationFields?.[0].branchTitle}
            </span>
          )}
        </div>
        <div className="flex justify-between mb-[1.75rem]">
          <p className="text-sm sm:text-base font-medium text-black/50">
            خدمت زیبایی
          </p>
          {isLoading ? (
            <div className="skeleton w-32 h-4 rounded-lg" />
          ) : (
            <span className="text-base leading-5 font-semibold">
              {reservationInfo?.entity?.reservationFields?.[0].serviceTitle}
            </span>
          )}
        </div>
        <div className="flex justify-between mb-[1.75rem]">
          <p className="text-sm font-medium text-black/50">آرایشگر</p>
          {isLoading ? (
            <div className="skeleton w-32 h-4 rounded-lg" />
          ) : (
            <span className="text-base leading-5 font-semibold">
              {reservationInfo?.entity?.reservationFields?.[0]
                .branchUserFirstName ?? ""}{" "}
              {
                reservationInfo?.entity?.reservationFields?.[0]
                  .branchUserLastName
              }
            </span>
          )}
        </div>
        <div className="flex justify-between mb-[1.75rem]">
          <p className="text-sm sm:text-base font-medium text-black/50">
            تاریخ رزرو
          </p>
          {isLoading ? (
            <div className="skeleton w-32 h-4 rounded-lg" />
          ) : (
            <span className="text-base leading-5 font-semibold">
              {reservationDate.day.persian +
                " " +
                reservationDate.day.numeric +
                " " +
                reservationDate.month.persian}{" "}
              - ساعت {reservationDate.time}
            </span>
          )}
        </div>
        <div className="flex justify-between">
          <p className="text-sm sm:text-base font-medium text-black/50">
            هزینه
          </p>
          {isLoading ? (
            <div className="skeleton w-32 h-4 rounded-lg" />
          ) : (
            <span className="text-base leading-5 font-semibold">
              {addCommas(
                reservationInfo?.entity?.reservationFields?.[0]?.prePay?.toString() ??
                  ""
              )}{" "}
              تومان
            </span>
          )}
        </div>
        <span className="custom-divider my-[1.75rem]" />
        <div className="flex justify-between">
          <p className="text-sm font-medium text-black/50">
            مبلغ بیعانه و قابل پرداخت
          </p>
          {isLoading ? (
            <div className="skeleton w-32 h-4 rounded-lg" />
          ) : (
            <span className="text-sm sm:text-base leading-5 font-semibold text-pink-primary">
              {addCommas(
                reservationInfo?.entity?.reservationFields?.[0]?.prePay?.toString() ??
                  ""
              )}
              <span className="text-[0.625rem] leading-5 font-semibold ms-0.5">
                تومان
              </span>
            </span>
          )}
        </div>
      </section>
      <ReservationFooter
        submitPayHandler={submitPayHandler}
        activeStep={5}
        wrapperClassName="sm:!mt-[3.75rem]"
      />
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
        <input type="hidden" value={paymentInfo?.form?.amount} name="amount" />
        <input
          type="hidden"
          value={paymentInfo?.form?.redirectUrl}
          name="redirectUrl"
        />
      </form>
    </section>
  );
};

export default Page;
