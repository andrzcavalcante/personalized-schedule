import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { User } from "../../entities/users.entitie";
import { AppError } from "../../errors/AppError";
import {
  TContactsResponse,
} from "../../interfaces/contacts.interface";
import { contactsSchemaResponse } from "../../schemas/contact.schema";

const listContactService = async (userId: number): Promise<TContactsResponse> => {
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
  
  return contactsSchemaResponse.parse(user.contacts)
};

export { listContactService }