"use client";
import AccountLayout from "@/components/AccountLayout";
import Button from "@/components/theme/Button";
import Input from "@/theme/Input";
import SelectBox from "@/theme/SelectBox";
import TextArea from "@/theme/TextArea";
import { useState } from "react";

const subjectComments = [
  { id: "0", title: "خطای نرم افزار (هرگونه باگ و خطا از نرم افزار)" },
  {
    id: "1",
    title: "محتوای غلط (غلط املایی نگارشی و یا مطالب غیر صحیح از نظر محتوایی",
  },
  {
    id: "2",
    title: "سایر",
  },
  {
    id: "3",
    title: "عمومی",
  },
];

const ticket = () => {
  const [selectedSubjectComments, setSelectedSubjectComments] = useState({
    id: subjectComments[0]?.id,
    title: subjectComments[0]?.title,
  });

  return (
    <AccountLayout sectionTitle="نوبت های من">
      <div className="flex flex-col w-full h-full pt-3 p-5 bg-white rounded-3xl border border-card-border">
        <p className="text-[1.125rem] leading-5 font-semibold text-black mb-[2.125rem]">
          ارسال تیکت
        </p>
        <SelectBox
          label="موضوع تیکت"
          list={subjectComments}
          selectedItem={selectedSubjectComments}
          onSelect={(item) => {
            setSelectedSubjectComments({
              id: item?.id,
              title: item?.title,
            });
          }}
        />
        <Input
          wrapperClassName="my-[1.688rem]"
          label="عنوان"
          inputProps={{ id: "ticket-title" }}
        />
        <TextArea
          label="توضیحات"
          wrapperClassName="mb-5"
          inputProps={{
            id: "ticket-description",
          }}
        />
        <Button className="w-full sm:w-[7.375rem] leading-[1.375rem] mt-auto self-end">
          ارسال
        </Button>
      </div>
    </AccountLayout>
  );
};

export default ticket;
