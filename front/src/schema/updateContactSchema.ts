import {z} from 'zod';

export const updateContactSchema = z.object({
    full_name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional()
})

export type TUpdateContact = z.infer<typeof updateContactSchema>