import { z } from "zod";

export const UserProfileValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.number(),
  nationalCode: z.string(),
  birthDate: z.string(),
  email: z.string(),
  phoneNumber: z.string().optional(),
  pictureAddress: z.string().nullable(),
  balance: z.number(),
});

export type IUserProfile = z.infer<typeof UserProfileValidation>;
