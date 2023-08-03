import { z } from "zod";

export const dataContactSchema = z.object({
  full_name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

export type TdataContact = z.infer<typeof dataContactSchema>;
