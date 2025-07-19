import { FC } from "react";
import Badge from "../theme/Badge";
export type TableData = {
  type: string;
  status?: "increase" | "decrease";
  payload: string;
  width?: string;
}[][];

interface TableBodyProps {
  data: TableData;
}
const TableBody: FC<TableBodyProps> = (props) => {
  const { data } = props;
  return (
    <div className="w-full flex flex-col gap-y-6 !overflow-x-auto hide-scrollbar !h-[calc(100%-108px)] py-3">
      {data.map((item) => (
        <div className="w-[100%] flex items-center px-4 pb-6 border-b border-input last-of-type:border-0 gap-x-12 sm:gap-x-0">
          {item.map((newItem) => (
            <>
              {newItem.type === "text" && (
                <p
                  style={
                    !newItem?.width
                      ? { width: `calc(100% / ${item?.length})` }
                      : { width: newItem?.width + `%` }
                  }
                  className="text-sm leading-[1.313rem] font-medium text-black text-center"
                >
                  {newItem.payload as string}
                </p>
              )}
              {newItem.type === "badge" && (
                <div
                  style={
                    !newItem?.width
                      ? { width: `calc(100% / ${item?.length})` }
                      : { width: newItem?.width + `%` }
                  }
                  className="flex justify-center text-center"
                >
                  <Badge
                    className={`${
                      newItem?.status === "increase"
                        ? "bg-green-badge"
                        : "bg-pink-badge"
                    }`}
                  >
                    {newItem.status === "increase"
                      ? `${newItem?.payload}+`
                      : `${newItem?.payload}-`}
                  </Badge>
                </div>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableBody;
