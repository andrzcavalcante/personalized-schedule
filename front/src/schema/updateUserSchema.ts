import {z} from 'zod';

export const updateUserSchema = z.object({
    full_name: z.string().optional(),
    phone: z.string().optional(),
    password: z.string().optional(),
})

export type TUpdateUser = z.infer<typeof updateUserSchema>