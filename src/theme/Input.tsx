import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from "react";

interface IProps {
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

const Input = forwardRef(
  (props: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { inputProps } = props;
    return (
      <div className={`flex flex-col ${props?.wrapperClassName}`}>
        {props?.label && (
          <label
            htmlFor={inputProps?.id}
            className={`text-[0.938rem] leading-5 font-medium text-black mb-[0.313rem] cursor-pointer ${props?.labelClassName}`}
          >
            {props?.label}
          </label>
        )}
        <input
          ref={ref}
          {...inputProps}
          className={`w-full h-[2.813rem] rounded-bl-sm rounded-tr-sm rounded-tl-lg sm:rounded-tl-2xl rounded-br-lg sm:rounded-br-2xl p-4 bg-white border border-input ${inputProps?.className}`}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
