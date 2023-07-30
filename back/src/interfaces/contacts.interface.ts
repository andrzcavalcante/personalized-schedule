import {z} from 'zod'
import { contactSchema, contactSchemaRequest, contactSchemaUpdate, contactsSchemaResponse } from '../schemas/contact.schema'
import { DeepPartial } from 'typeorm'

type TContactRequest = z.infer<typeof contactSchemaRequest>
type TContact = z.infer<typeof contactSchema>
type TContactResponse = z.infer<typeof contactSchema>
type TContactsResponse = z.infer<typeof contactsSchemaResponse>
type TContactUpdate = DeepPartial<TContactRequest>

export { TContact, TContactRequest, TContactResponse, TContactUpdate,TContactsResponse }

