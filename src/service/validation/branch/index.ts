import { number, z } from "zod";

export const BranchValidation = z
  .object({
    address: z.string(),
    description: z.string(),
    distance: z.number().nullish(),
    id: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    picture: z.string(),
    title: z.string(),
  })
  .array();

export type IBranch = z.infer<typeof BranchValidation>;
