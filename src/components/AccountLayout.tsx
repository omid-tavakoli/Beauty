"use client";
import Image from "next/image";
import { ReactNode } from "react";
import Header from "./Header";
import UserAccountManagement from "./UserAccountManagement";
import { useGet } from "@/hooks/usefetch";
import { getUserProfile } from "@/service/api/auth/user";
import { removeAreaCode } from "@/service/utils/phoneNumberEdit";
import { addCommas } from "@/service/utils/addCommas";
import { gatewayUrl } from "@/service/config/variables";

const AccountLayout = ({
  children,
  sectionTitle,
}: {
  children: ReactNode;
  sectionTitle: string;
}) => {
  const {
    data: userProfile,
    refetch: userProfileRefetch,
    isLoading: userProfileLoading,
  } = useGet(getUserProfile, {});

  return (
    <section className="flex flex-col w-full h-fit max-w-beauty mx-auto py-5 sm:py-[2.5rem]">
      <Header
        userInfo={userProfile?.entity}
        wrapperClassName="!mb-5 sm:!mb-[1.875rem]"
      />
      <span className="custom-divider mb-8 sm:mb-10" />
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-4 w-full h-full sm:h-[36.188rem] px-5 beauty:px-0">
        <div className="w-full sm:w-[16.625rem] h-[36.188rem] sm:h-full bg-white p-5 rounded-3xl border border-card-border">
          <div className="flex items-start">
            <div className="relative w-[5.938rem] sm:w-20 h-20">
              <Image
                src={
                  userProfile?.entity
                    ? gatewayUrl + userProfile?.entity?.pictureAddress
                    : ""
                }
                alt=""
                fill
                className="rounded-tl-[1px] rounded-tr-3xl rounded-br-[1px] rounded-bl-3xl object-cover"
              />
            </div>
            <div className="flex flex-col ms-[0.625rem] mt-0.5">
              <p className="text-base leading-5 font-semibold text-black mb-1">
                {userProfileLoading ? (
                  <span className="skeleton w-28 h-4 rounded-lg" />
                ) : (
                  userProfile?.entity?.firstName ?? ""
                )}
                {userProfile?.entity?.lastName
                  ? `${userProfile?.entity?.lastName} عزیز`
                  : " کاربر عزیز "}
              </p>
              <span className="text-[0.813rem] leading-5 font-normal text-black mb-3">
                {!userProfileLoading ? (
                  removeAreaCode(userProfile?.entity?.phoneNumber)
                ) : (
                  <div className="skeleton w-28 h-4 rounded-lg" />
                )}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full h-11 bg-gray-500 px-3 rounded-xl mt-3 mb-6 ">
            <p className="text-sm font-semibold">کیف پول من</p>
            {userProfileLoading ? (
              <span className="skeleton w-28 h-6 rounded-lg" />
            ) : (
              <p className="text-green-primary font-semibold">
                {addCommas(userProfile?.entity?.balance?.toString() ?? "")}
                <span className="text-xs text-black"> تومان </span>
              </p>
            )}
          </div>
          <UserAccountManagement />
        </div>
        <div className="w-full h-full sm:max-w-[calc(100%-16.625rem-1rem)] flex flex-col gap-y-4 mt-5 sm:mt-0">
          <div className="w-full h-16 py-[1.375rem] px-5 bg-white rounded-3xl border border-card-border">
            <p className="text-[1.125rem] leading-5 font-semibold text-black">
              {sectionTitle}
            </p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default AccountLayout;
