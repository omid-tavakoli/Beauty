import { FC } from "react";
import TableBody, { TableData } from "./TableBody";
import TableSections, { TableSection } from "./TableSections";

interface Table {
  tableSections: TableSection[];
  data?: TableData;
  loading?: boolean;
}
const Table: FC<Table> = (props) => {
  const { tableSections, data, loading } = props;
  return (
    <section className="flex flex-col h-full ">
      <TableSections tableSections={tableSections} />
      {!!data && !loading && <TableBody data={data} />}
      {loading && (
        <div className="w-full  h-full flex flex-col gap-y-4 px-2  overflow-hidden">
          {new Array(4).fill("").map((_, i) => (
            <>
              <div
                key={i}
                className="skeleton w-full h-16 flex items-center  rounded-lg justify-between px-6"
              />
            </>
          ))}
        </div>
      )}
    </section>
  );
};

export default Table;
