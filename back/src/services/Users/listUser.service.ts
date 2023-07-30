import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entitie";
import { TUserResponse } from "../../interfaces/users.interface";
import { userSchemaResponse } from "../../schemas/user.schema";

const listUserService = async (id: number): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: id,
  });

  const returnUser: TUserResponse = userSchemaResponse.parse(user);

  return returnUser;
};

export { listUserService };
