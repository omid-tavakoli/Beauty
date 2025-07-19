"use client";
import AccountLayout from "@/components/AccountLayout";
import Button from "@/components/theme/Button";
import { useGet, useMutate } from "@/hooks/usefetch";
import { editUserProfile, getUserProfile } from "@/service/api/auth/user";
import { gatewayUrl } from "@/service/config/variables";
import { toEnDigit, toGregorian, toJalaali } from "@/service/utils/date";
import { compress, editBase64File, pickFile } from "@/service/utils/file";
import { removeAreaCode } from "@/service/utils/phoneNumberEdit";
import Input from "@/theme/Input";
import SelectBox from "@/theme/SelectBox";
import { DayValue } from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const genderList = [
  { id: "0", title: "مرد" },
  {
    id: "1",
    title: "زن",
  },
];
const DatePicker = dynamic(
  () => import("@hassanmojab/react-modern-calendar-datepicker"),
  {}
);
interface UserInformation {
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  gender: string | null;
  nationalCode: string | null;
  birthDate: string | null;
  email: string | null;
}
const account = () => {
  const [isEditUserInformation, setIsEditUserInformation] = useState(false);
  const [selectedDay, setSelectedDay] = useState<DayValue | null>(null);
  const [avatar, setAvatar] = useState("");
  const [userInformation, setUserInformation] = useState<UserInformation>({
    firstName: null,
    lastName: null,
    phoneNumber: null,
    gender: null,
    nationalCode: null,
    birthDate: null,
    email: null,
  });
  const [selectedGender, setSelectedGender] = useState({
    id: genderList[1]?.id,
    title: genderList[1]?.title,
  });
  const copyState = useRef<{
    userInformation: UserInformation | null;
    selectedDay: DayValue | null;
    selectedGender: { id: string; title: string } | null;
  }>({
    userInformation: null,
    selectedDay: null,
    selectedGender: null,
  });

  const { isLoading: getUserProfileLoading } = useGet(getUserProfile, {
    enable: true,
    onSuccess: (res) => {
      const userBirthday = res?.entity?.birthDate
        ? toJalaali(res?.entity?.birthDate)
        : undefined;
      const userInfo = {
        firstName: res?.entity?.firstName ?? null,
        lastName: res?.entity?.lastName ?? null,
        birthDate: res?.entity?.birthDate
          ? `${userBirthday?.year}/${userBirthday?.month.numeric}/${userBirthday?.day.numeric}`
          : null,
        email: res?.entity?.email ?? null,
        gender: res?.entity.gender === 0 ? "مرد" : "زن" ?? null,
        nationalCode: res?.entity?.nationalCode ?? null,
        phoneNumber: removeAreaCode(res?.entity?.phoneNumber) ?? null,
      };
      const userSelectGender = genderList.find(
        (gender) => gender.id === (res?.entity?.gender?.toString() ?? "1")
      )!;
      copyState.current.userInformation = { ...userInfo };
      if (!!userSelectGender) {
        copyState.current.selectedGender = { ...userSelectGender };
        setSelectedGender({ ...userSelectGender });
      }
      setUserInformation({ ...userInfo });

      if (userBirthday) {
        const selectedDay = {
          day: +toEnDigit(userBirthday?.day?.numeric),
          month: +toEnDigit(userBirthday?.month?.numeric),
          year: +toEnDigit(userBirthday?.year),
        };
        copyState.current.selectedDay = { ...selectedDay };
        setSelectedDay({ ...selectedDay });
      }
      setAvatar(
        res?.entity?.pictureAddress
          ? gatewayUrl + res?.entity?.pictureAddress
          : ""
      );
    },
  });

  const { mutate: userProfileMutate } = useMutate(editUserProfile);

  const handleSubmit = () => {
    const getUserBirthday = selectedDay
      ? toGregorian(selectedDay?.year, selectedDay?.month, selectedDay?.day)
      : undefined;

    userProfileMutate({
      args: {
        FirstName: userInformation?.firstName ?? null,
        LastName: userInformation?.lastName ?? null,
        BirthDate: getUserBirthday
          ? `${getUserBirthday.year}-${getUserBirthday.month}-${getUserBirthday.day}`
          : null,
        Email: userInformation?.email ?? null,
        Gender: +(selectedGender?.id ?? "1") ?? null,
        NationalCode: userInformation?.nationalCode ?? null,
        PictureBase64: avatar !== "" ? editBase64File(avatar) : null,
      },
      fn: {
        onSuccess: (res) => {
          setIsEditUserInformation(false);
        },
        onError: (res) => {
          if (copyState.current.userInformation) {
            setUserInformation({ ...copyState.current.userInformation });
            setSelectedDay(copyState.current.selectedDay);
            copyState.current.selectedGender &&
              setSelectedGender(copyState.current.selectedGender);
          }
        },
      },
    });
  };
  const cancelEditHandler = () => {
    setIsEditUserInformation(false);
    if (copyState.current.userInformation) {
      setUserInformation({ ...copyState.current.userInformation });
      setSelectedDay(copyState.current.selectedDay);
      copyState.current.selectedGender &&
        setSelectedGender(copyState.current.selectedGender);
    }
  };
  const fileHandler = () => {
    pickFile().then((res) =>
      compress(res.blob).then((img) => setAvatar(img.dataUrl))
    );
  };
  return (
    <AccountLayout sectionTitle="حساب کاربری">
      <div className="flex flex-col w-full sm:h-[calc(36.188rem-5rem)]  px-5 pt-[1.625rem] pb-5 bg-white rounded-3xl border border-card-border">
        <p className="text-base leading-5 font-semibold text-black mb-5">
          اطلاعات شخصی
        </p>
        {!isEditUserInformation ? (
          <>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[2.25rem] lg:gap-y-[3.125rem] gap-x-4 sm:gap-x-5">
              <div className="flex flex-col gap-y-2 order-1">
                <p className="text-black/65 text-[0.938rem] leading-5 font-medium">
                  نام و نام خانوادگی:
                </p>
                <span className="text-black text-[0.938rem] leading-[1.375rem] font-semibold">
                  {getUserProfileLoading ? (
                    <span className="skeleton w-32 h-4 rounded-lg" />
                  ) : (
                    userInformation?.firstName ?? "بدون نام"
                  )}
                  {userInformation?.lastName}
                </span>
              </div>
              <div className="flex flex-col gap-y-2 order-5">
                <p className="text-black/65 text-[0.938rem] leading-5 font-medium">
                  شماره موبایل:
                </p>
                <span className="text-black text-[0.938rem] leading-[1.375rem] font-semibold">
                  {getUserProfileLoading ? (
                    <span className="skeleton w-32 h-4 rounded-lg" />
                  ) : (
                    removeAreaCode(userInformation?.phoneNumber)
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-y-2 order-2">
                <p className="text-black/65 text-[0.938rem] leading-5 font-medium">
                  جنسیت:
                </p>
                <span className="text-black text-[0.938rem] leading-[1.375rem] font-semibold">
                  {getUserProfileLoading ? (
                    <div className="skeleton w-32 h-4 rounded-lg" />
                  ) : (
                    selectedGender?.title ?? "انخاب نشده"
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-y-2 order-6">
                <p className="text-black/65 text-[0.938rem] leading-5 font-medium">
                  کدملی:
                </p>
                <span className="text-black text-[0.938rem] leading-[1.375rem] font-semibold">
                  {getUserProfileLoading ? (
                    <div className="skeleton w-32 h-4 rounded-lg" />
                  ) : (
                    userInformation?.nationalCode ?? "تکمیل نشده"
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-y-2 order-3">
                <p className="text-black/65 text-[0.938rem] leading-5 font-medium">
                  تاریخ تولد:
                </p>
                <span className="text-black text-[0.938rem] leading-[1.375rem] font-semibold">
                  {!getUserProfileLoading ? (
                    selectedDay ? (
                      `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`
                    ) : (
                      "تکمیل نشده"
                    )
                  ) : (
                    <div className="skeleton w-32 h-4 rounded-lg" />
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-y-2 order-7">
                <p className="text-black/65 text-[0.938rem] leading-5 font-medium line">
                  ایمیل:
                </p>
                <span className="text-black text-[0.938rem] leading-[1.375rem] font-semibold w-[138px] block overflow-hidden sm:w-auto sm:overflow-visible">
                  {getUserProfileLoading ? (
                    <div className="skeleton w-32 h-4 rounded-lg" />
                  ) : (
                    userInformation?.email ?? "تکمیل نشده"
                  )}
                </span>
              </div>
            </div>
            <Button
              onClick={() => setIsEditUserInformation(true)}
              className="w-full sm:!w-fit leading-[1.375rem] mt-[4.5rem] sm:mt-auto self-end button-primary"
            >
              ویرایش اطلاعات
            </Button>
          </>
        ) : (
          <div className="w-full h-full flex-col flex lg:flex-row">
            <div className="w-full sm:w-[32.25rem] h-fit grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-[1.875rem] gap-x-8 sm:gap-x-5 me-[5.125rem]">
              <Input
                label="نام:"
                labelClassName="text-black/65"
                inputProps={{
                  id: "first-name",
                  className:
                    "text-[0.938rem] leading-[1.375rem] font-semibold text-black",
                  value: userInformation?.firstName ?? "",
                  onChange: (e) =>
                    setUserInformation((prev) => {
                      return {
                        ...prev,
                        firstName: e?.target?.value,
                      };
                    }),
                }}
              />
              <Input
                label="نام خانوادگی:"
                labelClassName="text-black/65"
                inputProps={{
                  id: "last-name",
                  className:
                    "text-[0.938rem] leading-[1.375rem] font-semibold text-black",
                  value: userInformation?.lastName ?? "",
                  onChange: (e) =>
                    setUserInformation((prev) => {
                      return {
                        ...prev,
                        lastName: e?.target?.value,
                      };
                    }),
                }}
              />
              <Input
                label="شماره موبایل:"
                labelClassName="text-black/65"
                inputProps={{
                  disabled: true,
                  id: "phone-number",
                  className:
                    "text-[0.938rem] leading-[1.375rem] font-semibold text-black",
                  value: userInformation?.phoneNumber ?? "",
                }}
              />
              <SelectBox
                label="جنسیت"
                list={genderList}
                selectedItem={selectedGender}
                onSelect={(item) => {
                  setSelectedGender({
                    id: item?.id,
                    title: item?.title,
                  });
                }}
              />
              <Input
                label="جنسیت:"
                labelClassName="text-black/65"
                inputProps={{
                  id: "gender",
                  className:
                    "text-[0.938rem] leading-[1.375re] font-semibold text-black",
                  value: userInformation?.gender ?? "",
                  onChange: (e) =>
                    setUserInformation((prev) => {
                      return {
                        ...prev,
                        gender: e?.target?.value,
                      };
                    }),
                }}
              />
              <Input
                label="کدملی:"
                labelClassName="text-black/65"
                inputProps={{
                  id: "national-code",
                  className:
                    "text-[0.938rem] leading-[1.375rem] font-semibold text-black",
                  value: userInformation?.nationalCode ?? "",
                  onChange: (e) =>
                    setUserInformation((prev) => {
                      return {
                        ...prev,
                        nationalCode: e?.target?.value,
                      };
                    }),
                }}
              />
              <DatePicker
                value={selectedDay as any}
                onChange={(res) => setSelectedDay(res as any)}
                shouldHighlightWeekends
                locale="fa"
                renderInput={({ ref }) => (
                  <Input
                    ref={ref as React.Ref<HTMLInputElement>}
                    label="تاریخ تولد:"
                    labelClassName="text-black/65"
                    inputProps={{
                      id: "date-of-birth",
                      className:
                        "text-[0.938rem] leading-[1.375rem] font-semibold text-black ",
                      readOnly: true,
                      value: selectedDay
                        ? `${selectedDay?.year}-${selectedDay?.month}-${selectedDay?.day}`
                        : "",
                    }}
                  />
                )}
                colorPrimary="#eb1086"
                wrapperClassName="posidde"
              />
              {/* <Input
                id="membership-number"
                label="شماره عضویت:"
                labelClassName="text-black/65"
                className="text-[0.938rem] leading-[1.375rem] font-semibold text-black"
                defaultValue={userInfo?.membershipNumber}
              /> */}
              <Input
                label="ایمیل:"
                labelClassName="text-black"
                inputProps={{
                  id: "email",
                  className:
                    "text-[0.938rem] leading-[1.375rem] font-semibold text-black",
                  value: userInformation?.email ?? "",
                  onChange: (e) =>
                    setUserInformation((prev) => {
                      return {
                        ...prev,
                        email: e?.target?.value,
                      };
                    }),
                }}
              />
            </div>
            <div className="flex flex-col flex-shrink-0 w-full h-full sm:w-[calc(100%-32.25rem-5.125rem)]">
              <div className="flex flex-row gap-x-[0.625rem] sm:gap-x-0 items-end sm:items-start sm:flex-col w-fit mt-[4.125rem]">
                <div className="flex items-center overflow-hidden justify-center sm:self-center w-[5.625rem] h-[5.625rem] bg-gray-200 rounded-tl-3xl rounded-br-3xl sm:mb-5">
                  {avatar === "" && (
                    <svg width="64" height="64">
                      <use
                        href={"assets/images/icons/userAccount.svg#upload"}
                      ></use>
                    </svg>
                  )}
                  {avatar !== "" && (
                    <img className="w-full h-full object-cover " src={avatar} />
                  )}
                </div>
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={fileHandler}
                >
                  <span className="text-xs leading-5 font-medium text-black mb-3">
                    تصویر کاربر
                  </span>
                  <div className="flex items-center justify-center w-[7.5rem] h-10 rounded-lg border border-card-border text-black text-[0.875rem] leading-[1.625rem] font-medium">
                    Choose File
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-[4.5rem] sm:mt-auto self-end">
                <Button
                  onClick={cancelEditHandler}
                  className="w-full sm:!w-fit me-1 leading-[1.375rem]  !button-primary-outline"
                >
                  لغو{" "}
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="w-full sm:!w-fit leading-[1.375rem] button-primary"
                >
                  ویرایش اطلاعات
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AccountLayout>
  );
};

export default account;
