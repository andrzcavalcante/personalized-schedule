import {z} from 'zod'

const contactSchema = z.object({
    id: z.number(),
    full_name: z.string(),
    email: z.string().email(),
    phone: z.number(),
    createAt: z.string().optional(),
  });
  
  const contactSchemaRequest = contactSchema.omit({
    createAt: true,
    id: true,
  });
  
  const contactSchemaUpdate = contactSchema.omit({
    id: true
  }).partial();

  const contactsSchemaResponse = z.array(contactSchema)

  export { contactSchema, contactSchemaRequest, contactSchemaUpdate, contactsSchemaResponse }