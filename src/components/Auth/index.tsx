"use client";
import { FC, useEffect, useState } from "react";
import PhoneStep from "./phoneStep";
import CodeStep from "./CodeStep";
import PasswordStep from "./PasswordStep";
import { Italiana } from "next/font/google";
import { LoginWithCodeResponse } from "@/service/api/auth/user";
import { useFormState } from "react-dom";
import { loginWithToken } from "@/service/utils/serverAuth";
import { closeModalHandler } from "@/service/utils/modalHandler";
import { allDefaultHeader } from "@/service/utils/globalFetchHeaderConfig";

type Tabs = "customer" | "owner";
export type StepType =
  | "phoneStep"
  | "codeStep"
  | "passwordStep"
  | "setPassword";
export type Payload = {
  phoneNumber?: string;
  token?: string;
  isResetPassword?: boolean;
  userLoginInfo?: LoginWithCodeResponse;
};

const italiana = Italiana({ subsets: ["latin"], weight: "400" });
export interface AuthStep {
  type: StepType;
  payload?: Payload;
}
interface LoginModalProps {
  userLogin?: (user?: any) => void;
}
const LoginModal: FC<LoginModalProps> = (props) => {
  const [activeTab, setActiveTab] = useState<Tabs>("customer");

  const [state, setLoginDispatch] = useFormState<any, LoginWithCodeResponse>(
    async (preState, payload) => {
      await loginWithToken(
        payload,
        activeTab === "owner" &&
          (payload.roles.includes(1) || payload.roles.includes(2))
      );
      return payload;
    },
    undefined
  );
  // useEffect(()=>{
  //   openModalHandler('loginModal')
  // }, [])
  const changeTab = (tab: Tabs) => {
    setActiveTab(tab);
  };
  const [step, setStep] = useState<AuthStep>({
    type: "phoneStep",
  });

  const changeStep = (step: AuthStep) => {
    setStep((pre) => ({
      type: step.type,
      payload: step.payload ?? pre.payload,
    }));
  };

  useEffect(() => {
    if (!!state?.token) {
      closeModalHandler("loginModal");
    }
  }, [state]);

  return (
    <>
      <dialog id="loginModal" className="modal">
        <div className="modal-box p-5 xl:pb-16  max-h-max max-w-full xl:w-[31rem] xl:h-fit w-full h-full rounded-none xl:rounded-[2.25rem] flex flex-col">
          <form method="dialog">
            <button>
              <svg
                width="24"
                height="24"
                className="fill-black opacity-30 stroke-transparent "
              >
                <use href={"/assets/images/icons/auth.svg#close"}></use>
              </svg>
            </button>
          </form>
          <p
            className={`text-[2rem] xl:text-[2.5rem] mx-auto text-center font-normal  ${italiana.className}`}
          >
            Beauty
          </p>
          <div className="relative flex  mt-8 before:content-[''] w-full sm:w-[50%] xl:w-72  mx-auto before:block justify-between before:w-full before:h-px before:bg-gray-300 before:absolute before:rounded-md before:bottom-0 before:right-0">
            <ul className="w-full  flex gap-6 justify-around">
              <li
                onClick={() => changeTab("customer")}
                className={`services-categories !w-1/2 ${
                  activeTab === "customer" &&
                  "text-pink-primary after:!w-3/4 before:!w-3/4"
                }  
               `}
              >
                مشتریان
              </li>
              <li
                onClick={() => changeTab("owner")}
                className={`services-categories !w-1/2 ${
                  activeTab === "owner" &&
                  "text-pink-primary after:!w-3/4 before:!w-3/4"
                }  
               `}
              >
                مدیریت
              </li>
            </ul>
          </div>
          {step.type === "phoneStep" && (
            <PhoneStep
              payload={step.payload}
              onSubmit={(phoneNumber, step) => {
                changeStep({
                  type: step ?? "codeStep",
                  payload: { phoneNumber },
                });
              }}
            />
          )}
          {step.type === "codeStep" && (
            <CodeStep
              payload={step.payload}
              onSubmit={(payload) => {
                if (!!payload?.userLoginInfo) {
                  allDefaultHeader(
                    "Authorization",
                    `Bearer ${payload?.userLoginInfo?.token}`
                  );
                  props?.userLogin?.(payload?.userLoginInfo);
                  setLoginDispatch(payload?.userLoginInfo);
                } else changeStep({ type: "setPassword", payload });
              }}
              editPhoneHandler={() => changeStep({ type: "phoneStep" })}
            />
          )}
          {step.type === "passwordStep" && (
            <PasswordStep
              payload={step.payload}
              title="کلمه عبور"
              onSubmit={(payload, step) => {
                if (!!payload?.userLoginInfo) {
                  setLoginDispatch(payload?.userLoginInfo);
                  allDefaultHeader(
                    "Authorization",
                    `Bearer ${payload?.userLoginInfo?.token}`
                  );
                  props?.userLogin?.(payload?.userLoginInfo);
                } else changeStep({ type: step ?? "codeStep", payload });
              }}
              isPassword
            />
          )}
          {step.type === "setPassword" && (
            <PasswordStep
              payload={step.payload}
              title="تعریف کلمه عبور"
              onSubmit={(payload, step) =>
                changeStep({ type: step ?? "codeStep", payload })
              }
            />
          )}
        </div>

        <form
          method="dialog"
          className="modal-backdrop bg-black opacity-50 hidden xl:block"
        >
          <button></button>
        </form>
      </dialog>
    </>
  );
};
export default LoginModal;
