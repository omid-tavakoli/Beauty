"use server";
import { cookies } from "next/headers";

import { SignJWT, jwtVerify } from "jose";
import {
  AUTH_ADMIN_TOKEN,
  AUTH_TOKEN,
  adminPanelUrl,
  expires,
} from "../config/variables";
import { redirect } from "next/navigation";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const key = new TextEncoder().encode("secret");

export interface UserInfo {
  name: string;
  phoneNumber: string;
}

export async function encryptToken(payload: any) {
  try {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("4 weeks from now")
      .sign(key);
  } catch (error) {
    return undefined;
  }
}
export async function decryptToken(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return undefined;
  }
}

export async function loginWithToken(payload: any, isAdmin?: boolean) {
  const getPayloadToken = await encryptToken({ payload, expires });
  if (getPayloadToken) {
    await cookies().set({ name: AUTH_TOKEN, value: getPayloadToken });
    if (isAdmin) {
      await cookies().set({ name: AUTH_TOKEN, value: getPayloadToken });
      await cookies().set({ name: AUTH_ADMIN_TOKEN, value: payload.token });
      redirect(adminPanelUrl);
    }
  } else return undefined;
  return payload;
}

export async function logoutWithToken() {
  try {
    await cookies().delete(AUTH_TOKEN);
    await cookies().delete(AUTH_ADMIN_TOKEN);
    return true;
  } catch (error) {
    return false;
  }
}
export async function getUserLoginInfo() {
  try {
    const userToken = await cookies().get(AUTH_TOKEN);
    if (!userToken?.value) return undefined;
    return await decryptToken(userToken?.value ?? "");
  } catch (error) {
    return undefined;
  }
}
export async function logoutUser(names?: string[]) {
  const cookieConfig:
    | Partial<ResponseCookie>
    | undefined
    | [options: ResponseCookie] = {
    expires: new Date("Thu, 01 Jan 1970 00:00:00"),
  };
  await cookies().set(AUTH_TOKEN, "", cookieConfig);
  await cookies().set(AUTH_ADMIN_TOKEN, "", cookieConfig);
  names?.map(async (name) => await cookies().set(name, "", cookieConfig));
  redirect("/");
}
