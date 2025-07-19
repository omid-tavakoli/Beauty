"use client";
import { LoginWithCodeResponse } from "@/service/api/auth/user";
import { allDefaultHeader } from "@/service/utils/globalFetchHeaderConfig";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  userInfo?: LoginWithCodeResponse;
}
const AuthProvider: FC<IProps> = (props) => {
  if (props?.userInfo?.token)
    allDefaultHeader("Authorization", `Bearer ${props?.userInfo?.token}`);

  return props.children;
};

export default AuthProvider;
