import { FC, useState } from "react";
import Modal from "../Modal";
import { workTimes } from "@/service/api/branch";

interface workTime {
    data: [workTimes] | undefined
}

export const Vacation = [
    { id: "0", dayOfWeek: "شنبه" },
    { id: "1", dayOfWeek: "یکشنبه" },
    { id: "2", dayOfWeek: "دوشنبه" },
    { id: "3", dayOfWeek: "سه شنبه" },
    { id: "4", dayOfWeek: "چهارشنبه" },
    { id: "5", dayOfWeek: "پنج شنبه" },
    { id: "6", dayOfWeek: "جمعه" },
    { id: "7", dayOfWeek: "تعطیلی های رسمی" },
  ];
  
const WorkTimeModal: FC<workTime> = (props) => {
    const { data } = props
    const Days = [
        { id: "0", title: "شنبه" },
        { id: "1", title: "یکشنبه" },
        { id: "2", title: "دوشنبه" },
        { id: "3", title: "سه شنبه" },
        { id: "4", title: "چهارشنبه" },
        { id: "5", title: "پنج شنبه" },
        { id: "6", title: "جمعه" },
    ];

    return (
        <Modal
            id="WorkTimeModal"
            title="ساعات کاری شعبه"
            borderClassName='!mt-3.5 !mb-0'
        >
            <div className="">
                {data?.map((work, i) => (
                    <div>
                        <div className="flex gap-x-7 mt-6">
                            <div
                                key={i}
                                className="flex justify-between bg-[#fafafa] w-full rounded-lg py-2 px-4"
                            >
                                <div>{Days[+work.dayOfWeek]?.title}</div>
                                {work.from === "00:00:00" && work.to === "00:00:00"
                                    ?
                                    <div className="flex justify-between w-full">
                                        <span>روز های تعطیل :</span>
                                        <span>{Vacation[+work.dayOfWeek]?.dayOfWeek}</span>
                                    </div>
                                    :
                                    <div>
                                        {work.from}    <span className="mx-2">الی</span>  {work.to}
                                    </div>
                                }
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Modal>

    )
}

export default WorkTimeModal