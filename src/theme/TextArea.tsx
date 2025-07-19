import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  TextareaHTMLAttributes,
} from "react";

interface IProps {
  inputProps?: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
  wrapperClassName?: string;
  label?: string;
  labelClassName?: string;
}

const TextArea = forwardRef(
  (props: IProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { inputProps } = props;
    return (
      <div className={`flex flex-col h-full ${props?.wrapperClassName}`}>
        {props?.label && (
          <label
            htmlFor={inputProps?.id}
            className={`text-[0.938rem] leading-5 font-medium text-black mb-[0.313rem] cursor-pointer outline-0 ${props?.labelClassName}`}
          >
            {props?.label}
          </label>
        )}
        <textarea
          ref={ref}
          {...inputProps}
          className={`w-full h-full rounded-bl-sm rounded-tr-sm rounded-tl-lg sm:rounded-tl-2xl rounded-br-lg sm:rounded-br-2xl p-4 bg-white border border-input resize-none outline-0 ${inputProps?.className}`}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
