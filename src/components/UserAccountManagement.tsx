"use client";
import { logoutUser } from "@/service/utils/serverAuth";
import Link from "next/link";
import { useFormState } from "react-dom";
import Button from "./theme/Button";
import { openModalHandler } from "@/service/utils/modalHandler";
import CancelModal from "./dashboard/reservation/CancelModal";
import LogOutModal from "./dashboard/logout/LogoutModal";

const UserAccountManagement = () => {
  const [state, userLogoutDispatch] = useFormState<any>(async () => {
    logoutUser();
  }, undefined);

  return (
    <div className="flex flex-col h-[calc(100%-10.5rem)] gap-y-[1.875rem]">
      <Link
        href={"/dashboard/account"}
        className="group flex items-center cursor-pointer"
      >
        <svg
          width="24"
          height="24"
          className="fill-transparent stroke-black group-hover:stroke-pink-primary me-[0.625rem] transition-colors duration-300"
        >
          <use href={"/assets/images/icons/userAccount.svg#profile"}></use>
        </svg>
        <p className="text-[0.875rem] leading-5 font-medium text-black group-hover:text-pink-primary transition-colors duration-300">
          حساب کاربری
        </p>
        <svg
          width="14"
          height="14"
          className="stroke-transparent fill-black/50 group-hover:fill-pink-primary transition-colors duration-300 ms-auto"
        >
          <use href={"/assets/images/icons/userAccount.svg#arrow-left-2"}></use>
        </svg>
      </Link>
      <Link
        href={"/dashboard/reservation"}
        className="group flex items-center cursor-pointer"
      >
        <svg
          width="24"
          height="24"
          className="fill-transparent stroke-black group-hover:stroke-pink-primary me-[0.625rem] transition-colors duration-300"
        >
          <use
            href={"/assets/images/icons/userAccount.svg#calendar-search"}
          ></use>
        </svg>
        <p className="text-[0.875rem] leading-5 font-medium text-black group-hover:text-pink-primary transition-colors duration-300">
          نوبت های من
        </p>
        <svg
          width="14"
          height="14"
          className="stroke-transparent fill-black/50 group-hover:fill-pink-primary ms-auto transition-colors duration-300"
        >
          <use href={"/assets/images/icons/userAccount.svg#arrow-left-2"}></use>
        </svg>
      </Link>
      <Link
        href={"/dashboard/wallet"}
        className="group flex items-center cursor-pointer"
      >
        <svg
          width="24"
          height="24"
          className="fill-transparent stroke-black group-hover:stroke-pink-primary me-[0.625rem] transition-colors duration-300"
        >
          <use href={"/assets/images/icons/userAccount.svg#wallet"}></use>
        </svg>
        <p className="text-[0.875rem] leading-5 font-medium text-black group-hover:text-pink-primary transition-colors duration-300">
          کیف پول
        </p>
        <svg
          width="14"
          height="14"
          className="stroke-transparent fill-black/50 group-hover:fill-pink-primary ms-auto transition-colors duration-300"
        >
          <use href={"/assets/images/icons/userAccount.svg#arrow-left-2"}></use>
        </svg>
      </Link>
      {/* <Link href={"#"} className="group flex items-center cursor-pointer">
        <svg
          width="24"
          height="24"
          className="fill-transparent stroke-black group-hover:stroke-pink-primary me-[0.625rem] transition-colors duration-300"
        >
          <use href={"/assets/images/icons/userAccount.svg#wallet"}></use>
        </svg>
        <p className="text-[0.875rem] leading-5 font-medium text-black group-hover:text-pink-primary transition-colors duration-300">
          پشتیبانی
        </p>
        <svg
          width="14"
          height="14"
          className="stroke-transparent fill-black/50 group-hover:fill-pink-primary ms-auto transition-colors duration-300"
        >
          <use href={"/assets/images/icons/userAccount.svg#arrow-left-2"}></use>
        </svg>
      </Link> */}
      <Link
        href={"/dashboard/comment"}
        className="group flex items-center cursor-pointer"
      >
        <svg
          width="24"
          height="24"
          className="fill-transparent stroke-black group-hover:stroke-pink-primary me-[0.625rem] transition-colors duration-300"
        >
          <use href={"/assets/images/icons/userAccount.svg#message"}></use>
        </svg>
        <p className="text-[0.875rem] leading-5 font-medium text-black group-hover:text-pink-primary transition-colors duration-300">
          دیدگاه ها
        </p>
        <svg
          width="14"
          height="14"
          className="stroke-transparent fill-black/50 group-hover:fill-pink-primary ms-auto transition-colors duration-300"
        >
          <use href={"/assets/images/icons/userAccount.svg#arrow-left-2"}></use>
        </svg>
      </Link>
      <div
        // onClick={userLogoutDispatch}
        className="group flex items-center cursor-pointer mt-auto"
      >
        <svg
          width="24"
          height="24"
          className="fill-transparent stroke-black group-hover:stroke-pink-primary me-[0.625rem] transition-colors duration-300"
        >
          <use href={"/assets/images/icons/userAccount.svg#logIn"}></use>
        </svg>
        <Button
          onClick={() => openModalHandler("logoutUser")}
          className="text-[0.875rem] leading-5 font-medium text-black group-hover:text-pink-primary transition-colors duration-300"
        >
          خروج
        </Button>
      </div>
      <LogOutModal />
      <CancelModal />
    </div>
  );
};

export default UserAccountManagement;
