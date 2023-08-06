import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import jwt from "jsonwebtoken";
import { tUser, tUserLogin, tUserRepo } from "../../interfaces/user.interface";

const userLoginService = async (loginData: tUserLogin): Promise<string> => {
  const userRepo: tUserRepo = AppDataSource.getRepository(User);
  const user: tUser | null = await userRepo.findOne({
    where: {
      username: loginData.username,
    },
  });
  if (!user) {
    throw new AppError("Invalid Credentials", 401);
  }
  const passwordMatch = await compare(loginData.password, user.password);
  if (!passwordMatch) {
    throw new AppError("Invalid Credentials", 401);
  }
  const token = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: String(user.id),
  });
  return token;
};
export { userLoginService };
