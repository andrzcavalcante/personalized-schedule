import {z} from 'zod';

export const dataUserSchema = z.object({
    full_name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    password: z.string()
})

export type TDataUser = z.infer<typeof dataUserSchema>