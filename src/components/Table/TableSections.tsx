import { FC } from "react";

export interface TableSection {
  title: string;
  width?: string;
}

interface IProps {
  tableSections: TableSection[];
}

const TableSections: FC<IProps> = (props) => {
  return (
    <div className="w-full flex items-center px-4 h-[3.5rem] bg-gray-500 border border-input rounded-lg !overflow-x-auto gap-x-8 hide-scrollbar">
      {props?.tableSections?.map((item, index: number) => (
        <div
          style={
            !item?.width
              ? {
                  width: `calc(100% / ${props?.tableSections?.length})`,
                }
              : {
                  width: item?.width + `%`,
                }
          }
          className="flex justify-between !mx-auto"
        >
          <p className="w-full break-words text-black text-sm leading-5 font-medium text-center whitespace-nowrap">
            {item?.title}
          </p>
          <span
            className={`block h-[auto] w-px bg-input ${
              props?.tableSections?.length === index + 1 && "hidden"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default TableSections;
