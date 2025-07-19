import { getFetcher, postFetcher } from "@/service/config/fetcher";
import { IUserProfile } from "@/service/validation/userProfile";

interface LoginParams {
  phoneNumber: string;
  password?: string | null;
  code?: string | null;
}
interface LoginResponse {
  Token: string;
  FirstName: string;
  LastName: string;
  Picture: string;
}

export const login = (
  params: LoginParams
): global.GlobalResponse<LoginResponse> => {
  return postFetcher(`api/user/login`, params);
};

interface LoginWithCodeParams {
  phoneNumber: string;
  code: string;
}
export interface LoginWithCodeResponse {
  firstName: string | null;
  lastName: string | null;
  picture: string | null;
  token: string;
  roles: number[];
}
export const loginWithCode = (
  params: LoginWithCodeParams
): global.GlobalResponse<LoginWithCodeResponse> => {
  return postFetcher(`api/user/loginwithcode`, params);
};
interface SetPasswordParams {
  token: string;
  password: string;
}
export const setPassword = (
  params: SetPasswordParams
): global.GlobalResponse<LoginWithCodeResponse> => {
  return postFetcher(`api/user/setpassword`, params);
};
export const loginWithPassword = (
  params: LoginParams
): global.GlobalResponse<LoginWithCodeResponse> => {
  return postFetcher(`api/user/userloginwithpassword`, params);
};
export const forgotPassword = (
  params: LoginParams
): global.GlobalResponse<LoginWithCodeResponse> => {
  return postFetcher(`api/user/forgotpassword`, params);
};
export const checkCodeForPassword = (
  params: LoginParams
): global.GlobalResponse<LoginWithCodeResponse> => {
  return postFetcher(`api/user/checkcode`, params);
};

export interface UserProfileParams {
  FirstName: string | null;
  LastName: string | null;
  Gender: number | null;
  NationalCode: string | null;
  BirthDate: string | null;
  Email: string | null;
  PictureBase64: string | null;
}

export const getUserProfile = (): global.GlobalResponse<IUserProfile> => {
  return getFetcher("api/user/userchecktoken");
};

export const editUserProfile = (
  params: UserProfileParams
): global.GlobalResponse<UserProfileParams> => {
  return postFetcher("api/user/profile", params);
};
