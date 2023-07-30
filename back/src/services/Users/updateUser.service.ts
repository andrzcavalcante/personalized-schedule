import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entitie";
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interface";
import { userSchemaResponse } from "../../schemas/user.schema";

const updateUserService = async (
  data: TUserUpdate,
  id: number
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldData: User | null = await userRepository.findOneBy({
    id: id,
  });

  const updateUser = userRepository.create({
    ...oldData,
    ...data,
  });

  await userRepository.save(updateUser);

  const returnUserUpdate: TUserResponse = userSchemaResponse.parse(updateUser);

  return returnUserUpdate;
};

export { updateUserService };
