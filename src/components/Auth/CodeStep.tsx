import { useMutate } from "@/hooks/usefetch";
import {
  checkCodeForPassword,
  forgotPassword,
  login,
  loginWithCode,
} from "@/service/api/auth/user";
import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import { useTimer } from "react-timer-hook";
import { areaCode } from "./phoneStep";
import { Payload } from ".";

interface Props {
  onSubmit?: (token: Payload) => void;
  payload?: Payload;
  editPhoneHandler: () => void;
}
const expireTime = new Date();
const CodeStep: FC<Props> = (props) => {
  const { onSubmit, payload, editPhoneHandler } = props;

  const [code, setCode] = useState<string[]>([]);
  const [error, setError] = useState("");
  const inputRefs: MutableRefObject<null | HTMLInputElement>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const { mutate: loginWithCodeMutate } = useMutate(loginWithCode);
  const { mutate: checkCodeForPasswordMutate } =
    useMutate(checkCodeForPassword);
  const { mutate: loinMuted } = useMutate(login);
  const { mutate: forgotPasswordMutate } = useMutate(forgotPassword);

  useEffect(() => {
    if (code.length === 5) {
      btnHandler();
    }
  }, [code]);
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    autoStart: true,
    expiryTimestamp: new Date(
      new Date().setSeconds(new Date().getSeconds() + 60)
    ),
  });

  function handleInput(e: any, index: any) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    if (input.value.length < 2) {
      if (input.value !== "") {
        setCode((pre) => {
          let getPreCode = [...pre];
          getPreCode[index] = input.value;
          return getPreCode;
        });
        if (nextInput) {
          nextInput?.current?.select();
        }
      } else {
        setCode((pre) => {
          let getPreCode = [...pre];
          getPreCode[index] = "";

          return getPreCode;
        });
        previousInput?.current?.focus();
        previousInput?.current?.select();
      }
    }
  }
  const handlePaste = (e: any) => {
    const pastedCode = e.clipboardData.getData("text");
    if (pastedCode.length === 5) {
      setCode(pastedCode);
      inputRefs[5].current?.focus();
    }
  };

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);
  const reSendCode = () => {
    if (payload?.isResetPassword) {
      !!payload?.phoneNumber &&
        forgotPasswordMutate({
          args: {
            phoneNumber: payload?.phoneNumber,
          },
          fn: {
            onSuccess() {
              restart(
                new Date(new Date().setSeconds(new Date().getSeconds() + 60)),
                true
              );
            },
          },
        });
    } else {
      if (!!payload?.phoneNumber)
        loinMuted({
          args: { password: "", phoneNumber: payload?.phoneNumber },
          fn: {
            onSuccess: (res) => {
              restart(
                new Date(new Date().setSeconds(new Date().getSeconds() + 60)),
                true
              );
            },
            onError: (res) => {
              console.log("res", res);
            },
          },
        });
    }
  };

  const btnHandler = () => {
    if (payload?.isResetPassword) {
      checkCodeForPasswordMutate({
        args: {
          code: code.join(""),
          phoneNumber: payload?.phoneNumber ?? "",
        },
        fn: {
          onSuccess(response) {
            onSubmit &&
              onSubmit({
                token: response?.entity?.token,
              });
          },
        },
      });
    } else
      loginWithCodeMutate({
        args: {
          code: code.join(""),
          phoneNumber: payload?.phoneNumber ?? "",
        },
        fn: {
          onError: (error) => {
            setError(error.errors?.[0]?.message ?? error.message ?? "");
          },
          onSuccess: (res) => {
            if (res.code === 203)
              onSubmit && onSubmit({ token: res?.entity?.token });
            else onSubmit && onSubmit({ userLoginInfo: res?.entity });
          },
        },
      });
  };
  return (
    <>
      <div className="lg:w-[17rem] w-full sm:w-[50%] h-full mx-auto flex flex-col lg:items-center">
        <p className=" mt-7 font-semibold text-xl text-center">کد یکبار مصرف</p>
        <div className="flex  mt-7 mb-3 items-center ">
          <p className="self-start text-xs text-black">
            کد تایید ارسال شده به شماره{" "}
            {payload?.phoneNumber?.split(areaCode)?.[1]} را وارد کنید.
          </p>
          <svg
            onClick={editPhoneHandler}
            width="20"
            height="20"
            className=" stroke-pink-primary ms-2 -mt-1"
          >
            <use href={"assets/images/icons/auth.svg#edit"}></use>
          </svg>
        </div>
        <div
          className="flex items-center gap-5 w-full justify-between lg:justify-start"
          dir="ltr"
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <input
              className={`w-12 h-11 text-sm font-medium border-gray-300 text-center  rounded-tr-[2px] rounded-tl-xl rounded-bl-[2px] rounded-br-xl border valid:border-pink-primary ${
                error ? "!border-danger-primary" : ""
              }`}
              required
              value={code[index]}
              key={index}
              type="number"
              maxLength={1}
              id={`input-${index}`}
              onChange={(e) => handleInput(e, index)}
              ref={inputRefs[index]}
              onPaste={handlePaste}
            />
          ))}
        </div>
        {!!error && <p className="text-danger-primary text-xs mt-2">{error}</p>}

        <button
          onClick={btnHandler}
          className="w-full order-2 lg:order-1   lg:mt-11 h-[2.8rem] bg-pink-primary rounded-full text-white  "
        >
          تایید کد یکبار مصرف
        </button>

        <div className="text-xs order-1 lg:order-2 mt-auto mb-6 lg:mb-0  lg:mt-4 text-center ">
          {isRunning ? (
            <>
              <span className="font-bold  pe-1">
                {minutes.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
                :
                {seconds.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </span>
              تا درخواست مجدد کد
            </>
          ) : (
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={reSendCode}
            >
              <svg width="20" height="20" className="fill-black me-1">
                <use href={"assets/images/icons/auth.svg#rotate-arrow"}></use>
              </svg>
              <p>ارسال مجدد کد تایید</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CodeStep;
