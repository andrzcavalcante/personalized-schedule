import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../errors/AppError";
import { TContactResponse, TContactUpdate } from "../../interfaces/contacts.interface";
import { contactSchema } from "../../schemas/contact.schema";



const updateContactService = async (data: TContactUpdate, contactId: number): Promise<TContactResponse> =>{

    const contactRepository = AppDataSource.getRepository(Contact);
    const oldContact = await contactRepository.findOneBy({id: contactId});
  
    if (!oldContact) {
      throw new AppError("contact not found", 404);
    }
    
    const newContactData = contactRepository.create({
        ...oldContact,
        ...data
    })

    await contactRepository.save(newContactData)

    return contactSchema.parse(newContactData)
}   


export { updateContactService }