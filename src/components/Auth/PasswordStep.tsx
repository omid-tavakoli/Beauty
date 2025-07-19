import { useMutate } from "@/hooks/usefetch";
import {
  forgotPassword,
  loginWithPassword,
  setPassword as setPasswordFn,
} from "@/service/api/auth/user";
import { passwordValidation } from "@/service/validation/auth";
import IconInput from "@/theme/IconInput";
import { FC, useState } from "react";
import { Payload, StepType } from ".";

interface Props {
  onSubmit?: (payload: Payload, step?: StepType) => void;
  title: string;
  isPassword?: boolean;
  payload?: Payload;
}

const PasswordStep: FC<Props> = (props) => {
  const { onSubmit, title, isPassword, payload } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { isLoading, mutate: setPasswordMutate } = useMutate(setPasswordFn);
  const { mutate: loginWithPasswordMutate } = useMutate(loginWithPassword);
  const { mutate: forgotPasswordMutate } = useMutate(forgotPassword);

  const btnHandler = () => {
    if (isPassword && !payload?.isResetPassword) {
      !!payload?.phoneNumber &&
        loginWithPasswordMutate({
          args: { phoneNumber: payload?.phoneNumber, password },
          fn: {
            onSuccess: (response) => {
              if (onSubmit) {
                onSubmit({ userLoginInfo: response?.entity });
                setPassword("");
              }
            },
            onError: (error) => {
              setError("کلمه عبور اشتباه می باشد");
            },
          },
        });
    } else {
      const checkValidation = passwordValidation.safeParse(password);
      if (checkValidation.success) {
        payload?.token &&
          setPasswordMutate({
            args: {
              password,
              token: payload.token,
            },
          });
      } else {
        setError(checkValidation.error?.errors[0].message);
      }
    }
  };
  const forgotPasswordHandler = () => {
    !!payload?.phoneNumber &&
      forgotPasswordMutate({
        args: {
          phoneNumber: payload?.phoneNumber,
        },
        fn: {
          onSuccess() {
            onSubmit &&
              onSubmit(
                { phoneNumber: payload.phoneNumber, isResetPassword: true },
                "codeStep"
              );
          },
        },
      });
  };
  return (
    <>
      <>
        <div className="xl:w-[17rem] sm:w-[50%] w-full h-full mx-auto flex flex-col xl:items-center">
          <p className=" mt-7 font-semibold text-xl text-center">{title} </p>
          <p className="self-start text-xs mt-7 mb-2 ">
            کلمه عبور خود را وارد کنید
          </p>
          <IconInput
            errorMessage={error}
            inputProps={{
              value: password,
              className: ` text-secondary tracking-[.3rem] 	`,
              type: showPassword ? "text" : "password",
              onChange: (event) => setPassword(event.target.value),
            }}
            itemChildren={
              <svg
                width="16"
                height="16"
                onClick={() => setShowPassword((pre) => !pre)}
                className="fill-black  stroke-transparent "
              >
                <use
                  href={`assets/images/icons/auth.svg#${
                    showPassword ? "closEyes" : "eyes"
                  }`}
                ></use>
              </svg>
            }
            itemPosition="right"
          />
          {isPassword && (
            <p
              onClick={forgotPasswordHandler}
              className="text-pink-primary text-xs mt-2 cursor-pointer"
            >
              فراموشی رمز عبور
            </p>
          )}

          <button
            onClick={btnHandler}
            className="w-full order-2 xl:order-1 mt-auto xl:mt-11 h-[2.8rem] bg-pink-primary rounded-full text-white  "
          >
            تایید کلمه عبور
          </button>
        </div>
      </>
    </>
  );
};

export default PasswordStep;
