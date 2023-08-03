import {z} from 'zod';

export const registerSchema = z.object({
    full_name: z.string(),
    email: z.string().email("Deve ser um email"),
    phone: z.string(),
    password: z.string().nonempty("Senha é obrigatória")
})

export type TRegisterData = z.infer<typeof registerSchema>