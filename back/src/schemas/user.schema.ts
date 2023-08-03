import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
  createAt: z.date().optional(),
});

const userSchemaRequest = userSchema.omit({
  createAt: true,
  id: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const userSchemaUpdate = userSchema.omit({
  id: true,
  email: true,
  createAt: true
}).partial();


export { userSchema, userSchemaUpdate, userSchemaRequest, userSchemaResponse };
