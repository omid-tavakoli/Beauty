import { z } from "zod";

export const loginValidation = z.object({
  sendCode: z.string().array(),
});

const phoneRegex = new RegExp(`[+][0-9]{0,4}[-][0-9]{10}`);
export const phoneValidation = z
  .string()
  .regex(phoneRegex, "شماره موبابل معتبر نیست");

export const passwordValidation = z.string().min(8, "حداقل 8 کاراکتر");

export const confirmCodeValidation = z.string().length(4);
export type LoginValidation = z.infer<typeof loginValidation>;
export type ConfirmCodeValidation = z.infer<typeof loginValidation>;
