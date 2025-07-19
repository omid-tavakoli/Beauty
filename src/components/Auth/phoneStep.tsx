import { useMutate } from "@/hooks/usefetch";
import { login } from "@/service/api/auth/user";
import { phoneValidation } from "@/service/validation/auth";
import IconInput from "@/theme/IconInput";
import { FC, useState } from "react";
import { Payload, StepType } from ".";

interface Props {
  onSubmit?: (phoneNumber: string, step?: StepType) => void;
  payload?: Payload;
}
export const areaCode = "+98-";
const PhoneStep: FC<Props> = (props) => {
  const { onSubmit, payload } = props;

  const { mutate: loinMuted } = useMutate(login);

  const [phone, setPhone] = useState(
    payload?.phoneNumber?.split(areaCode)?.[1] ?? ""
  );
  const [error, setError] = useState("");

  const loginValidation = () => {
    return phoneValidation.safeParse(areaCode + phone);
  };
  const btnHandler = () => {
    const checkValidation = loginValidation();

    if (checkValidation.success) {
      loinMuted({
        args: { password: "", phoneNumber: areaCode + phone },
        fn: {
          onSuccess: (res) => {
            onSubmit && onSubmit(areaCode + phone);
          },
          onError: (res) => {
            if (res.code === 406) {
              onSubmit && onSubmit(areaCode + phone, "passwordStep");
            }
          },
        },
      });
      setError("");
    } else setError(checkValidation.error?.errors[0].message);
  };
  return (
    <>
      <div className="xl:w-[17rem] sm:w-[50%] w-full h-full mx-auto flex flex-col items-center">
        <p className=" mt-7 font-semibold text-xl">ثبت نام | ورود</p>
        <p className=" mt-7 self-start text-xs mb-2">
          شماره موبایل خود را وارد کنید.
        </p>
        <IconInput
          inputProps={{
            className: "text-secondary tracking-[.3rem]	",
            value: phone,
            onChange: (e) => setPhone(e.target.value),
          }}
          itemChildren={"98+"}
          itemPosition="left"
          errorMessage={error}
        />
        <button
          onClick={btnHandler}
          className="w-full mt-auto  xl:mt-11 h-[2.8rem] bg-pink-primary rounded-full text-white  "
        >
          ثبت شماره موبایل
        </button>
      </div>

      <div className="flex items-center mt-2 justify-center">
        <svg width="16" height="16" className="fill-black stroke-transparent ">
          <use href={"assets/images/icons/auth.svg#info-circle"}></use>
        </svg>
        <p className="text-[11px]  pr-2 ">
          استفاده از بیوتی به معنی پذیرش
          <span className="text-pink-primary "> قوانین و مقررات </span> این
          سرویس است.
        </p>
      </div>
    </>
  );
};
export default PhoneStep;
