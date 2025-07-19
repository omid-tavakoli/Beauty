import { Dispatch, FC, SetStateAction, useState } from "react";

interface IProps {
  list: {
    id: string;
    title: string;
  }[];
  selectedItem: {
    id: string;
    title: string;
  };
  onSelect: (item: any) => void;
  label?: string;
}

const SelectBox: FC<IProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleBlur = (e: any) => {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setIsOpen(false);
      }
    }, 0);
  };

  return (
    <div
      onClick={() => setIsOpen(true)}
      tabIndex={1}
      onBlur={(e) => handleBlur(e)}
      className="w-full flex flex-col cursor-pointer"
    >
      {props?.label && (
        <label className="text-[0.938rem] leading-5 font-bold mb-[0.313rem] cursor-pointer">
          {props?.label}
        </label>
      )}
      <div className="relative w-full text-small text-dark-neutral-800">
        <div
          tabIndex={1}
          className="group w-full h-[2.813rem] flex items-center justify-between gap-8 rounded-bl-sm rounded-tr-sm rounded-tl-lg sm:rounded-tl-2xl rounded-br-lg sm:rounded-br-2xl p-4 bg-white border border-input-border"
        >
          <p className="line-clamp-1">{props?.selectedItem?.title}</p>
          <svg
            width="15"
            height="15"
            className="group-focus:rotate-180 transition-transform duration-[250ms] fill-transparent stroke-black"
          >
            <use href={"/assets/images/icons/userAccount.svg#arrow-down"}></use>
          </svg>
        </div>
        <ul
          className={`absolute  ${
            !isOpen ? "invisible opacity-0" : "visible opacity-100"
          } transition-all duration-[250ms] z-10 w-full bg-white flex flex-col gap-y-5 h-fit scroll-xs p-5 overflow-y-auto shadow-beauty_md rounded-lg sm:rounded-2xl mt-0.5`}
        >
          {props?.list?.map((item) => (
            <li
              onClick={(e) => {
                e?.stopPropagation();
                props?.onSelect(item);
                setIsOpen(false);
              }}
              key={item?.id}
              className="text-[0.938rem] leading-5 font-medium text-black cursor-pointer"
            >
              {item?.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectBox;
