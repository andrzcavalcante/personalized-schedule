import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entitie";
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interface";
import { userSchemaResponse } from "../../schemas/user.schema";
import { hashSync } from "bcrypt";

const updateUserService = async (
  data: TUserUpdate,
  id: number
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldData: User | null = await userRepository.findOneBy({
    id: id,
  });

  try {
    if(data.password){
      data.password = hashSync(data.password, 10)
    }
    const updateUser = userRepository.create({
      ...oldData,
      ...data,
    });
  
    await userRepository.save(updateUser);
    return userSchemaResponse.parse(updateUser);

  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }

};

export { updateUserService };
