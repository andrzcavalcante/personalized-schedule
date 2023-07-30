import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entitie";
import { TUser, TUserRequest, TUserResponse } from "../../interfaces/users.interface";
import { userSchema, userSchemaRequest, userSchemaResponse } from "../../schemas/user.schema";
import { hash } from "bcrypt";
import { AppError } from "../../errors/AppError";

const createUserService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const { email } = data;
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (findUser) {
    throw new AppError("User already exists", 409);
  }

  data.password = await hash(data.password, 10)

  const user = userRepository.create(data)

  await userRepository.save(user)
  
  const returnUser: TUserResponse = userSchemaResponse.parse(user)

  return returnUser
};

export { createUserService }