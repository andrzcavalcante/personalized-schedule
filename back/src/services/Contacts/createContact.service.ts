import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { User } from "../../entities/users.entitie";
import { AppError } from "../../errors/AppError";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contacts.interface";
import { contactSchema } from "../../schemas/contact.schema";

const createContactService = async (
  data: TContactRequest,
  userId: number
): Promise<TContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact = contactRepository.create({
    ...data,
    user,
  });

  await contactRepository.save(contact);

  const returnContact = contactSchema.parse(user);

  return returnContact;
};

export { createContactService }