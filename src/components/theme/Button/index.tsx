import { FC, ReactNode } from "react";

type ButtonProps = JSX.IntrinsicElements["button"];
interface IProps extends ButtonProps {
  children?: ReactNode;
  iconProps?: {
    src?: string;
    className?: string;
    sizes?: {
      width: number | `${number}`;
      height: number | `${number}`;
    };
  };
}

const Button: FC<IProps> = (props) => {
  const { ...buttonProps } = props;
  return (
    <button {...buttonProps} className={`button ${buttonProps.className}`}>
      {props?.iconProps && (
        <svg
          width={props?.iconProps?.sizes?.width}
          height={props?.iconProps?.sizes?.height}
          className={`me-1 ${props?.iconProps?.className}`}
        >
          <use href={props?.iconProps?.src}></use>
        </svg>
      )}
      <span>{props?.children}</span>
    </button>
  );
};

export default Button;
