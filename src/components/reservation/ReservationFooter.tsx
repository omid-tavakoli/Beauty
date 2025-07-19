"use client";
import { useMutate } from "@/hooks/usefetch";
import { preReserve } from "@/service/api/revervation";
import { openModalHandler } from "@/service/utils/modalHandler";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import LoginModal from "../Auth";
import Button from "../theme/Button";
interface IProps {
  userInfo?: { payload: { token: string } };
  activeStep: number;
  date?: string;
  submitPayHandler?: () => void;
  wrapperClassName?: string;
  searchParams?: {
    bi?: string | null;
    si?: string | null;
    ei?: string | null;
  };
}
const ReservationFooter: FC<IProps> = (props) => {
  const { userInfo, activeStep } = props;
  const router = useRouter();
  const {
    bi: branchId,
    si: serviceId,
    ei: expertId,
  } = props?.searchParams ?? {};
  const [userLogin, setUserLogin] = useState(userInfo?.payload.token);
  const { mutate: preReserveMutate } = useMutate(preReserve);

  const handleConfirmButton = () => {
    if ((!userLogin || userLogin === "") && activeStep === 4) {
      openModalHandler("loginModal");
    } else if (activeStep === 1 && branchId)
      router.push(`services?bi=${branchId}`);
    else if (activeStep === 2 && branchId && serviceId)
      router.push(`experts?bi=${branchId}&si=${serviceId}`);
    else if (activeStep === 3 && branchId && serviceId && expertId)
      router.push(`times?bi=${branchId}&si=${serviceId}&ei=${expertId}`);
    else if (
      activeStep === 4 &&
      branchId &&
      expertId &&
      serviceId &&
      props.date
    )
      preReserveMutate({
        args: {
          BranchId: branchId,
          Services: [
            {
              branchUserId: expertId,
              date: props.date,
              serviceId: serviceId,
            },
          ],
        },
        fn: {
          onSuccess(response) {
            router.push(`factor?ri=${response?.entity?.[0]?.id}`);
          },
        },
      });
  };

  return (
    <>
      <section
        className={`fixed bottom-0 z-20 w-full h-[4.875rem] lg:h-auto flex justify-between py-4 px-5 lg:py-0 lg:static bg-white lg:bg-transparent shadow-beauty_sm lg:shadow-none beauty:px-0 ${props?.wrapperClassName}`}
      >
        <div
          onClick={() => {
            if (activeStep === 2) router.push(`branches?bi=${branchId}`);
            if (activeStep === 3)
              router.push(`services?bi=${branchId}&si=${serviceId}`);
            if (activeStep === 4)
              router.push(
                `experts?bi=${branchId}&si=${serviceId}&ei=${expertId}`
              );
            if (activeStep === 5)
              router.push(
                `times?bi=${branchId}&si=${serviceId}&ei=${expertId}`
              );
          }}
        >
          <Button
            className={`button-secondary ${
              activeStep === 4 && "hidden sm:flex"
            }`}
            iconProps={{
              src: "/assets/images/icons/reservation.svg#return-arrow",
              sizes: {
                width: 18,
                height: 18,
              },
            }}
          >
            بازگشت
          </Button>
          {activeStep === 4 && (
            <Button
              className="button-secondary sm:hidden w-[2.813rem] h-[2.813rem] rounded-full"
              iconProps={{
                src: "/assets/images/icons/reservation.svg#return-arrow",
                sizes: {
                  width: 18,
                  height: 18,
                },
              }}
            />
          )}
        </div>

        <div className="flex gap-2 sm:gap-[0.625rem]">
          {activeStep === 3 && (
            <Link
              href={{
                pathname: "/reservation/reserve-details",
                query: props.searchParams,
              }}
            >
              <Button className="!text-black !bg-white border border-card-border">
                فرقی نداره
              </Button>
            </Link>
          )}
          {activeStep === 4 && (
            <Link href={"#"}>
              <Button className="button-secondary hidden sm:flex h-[2.813rem]">
                می‌خواهم نزدیک‌ترین زمان را رزرو کنم
              </Button>
              <Button className="button-secondary flex sm:hidden h-[2.813rem]">
                رزرو نزدیک ترین زمان
              </Button>
            </Link>
          )}
          <Button
            className="button-primary"
            onClick={
              activeStep !== 5 ? handleConfirmButton : props?.submitPayHandler
            }
          >
            {activeStep === 1
              ? "تایید شعبه"
              : activeStep === 2
              ? "تایید خدمت"
              : activeStep === 3
              ? "تایید آرایشگر"
              : activeStep === 4
              ? "تایید رزرو"
              : "تایید رزرو و پرداخت"}
          </Button>
        </div>
        <LoginModal
          userLogin={(user) => {
            setUserLogin(user.token);
          }}
        />
      </section>
    </>
  );
};

export default ReservationFooter;
