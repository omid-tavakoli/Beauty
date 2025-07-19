import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from "react";

interface Props {
  inputProps: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  itemPosition: "right" | "left";
  itemChildren: ReactNode;
  errorMessage?: string;
}
const IconInput: FC<Props> = (props) => {
  const { inputProps, itemChildren, itemPosition, errorMessage } = props;

  return (
    <>
      <div
        className={` flex  items-center w-full xl:w-[17rem] mx-auto h-[2.8rem] overflow-hidden  border ${
          errorMessage ? "border-danger-primary" : ""
        } border-gray-300  relative xl:px-6 rounded-tr-[2px] rounded-tl-xl rounded-bl-[2px] rounded-br-xl`}
      >
        <input
          {...inputProps}
          id="phone"
          className={`w-3/4 text-sm font-medium ${inputProps.className} ${
            itemPosition === "right" ? "order-2" : ""
          }  h-full ps-3 `}
          dir="ltr"
        />
        <div
          className={`relative  flex  items-start justify-center before:border  ${
            itemPosition === "right"
              ? "order-1 before:left-0 w-1/6"
              : "order-2 before:right-0 w-1/4"
          } before:absolute before:h-full text-secondary before:border-gray-300 `}
        >
          {itemChildren}
        </div>
      </div>
      {!!errorMessage && (
        <p className="text-danger-primary text-xs mt-1 me-auto ">{errorMessage}</p>
      )}
    </>
  );
};

export default IconInput;
