import { compare } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entitie";
import { AppError } from "../../errors/AppError";
import { TLoginRequest } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createTokenService = async (data: TLoginRequest) => {
  const { email, password } = data;

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign(
    {userName: user.full_name},
    process.env.SECRET_KEY!,
    {expiresIn: "12h", subject: String(user.id) }
  );

  return token;
};

export { createTokenService }