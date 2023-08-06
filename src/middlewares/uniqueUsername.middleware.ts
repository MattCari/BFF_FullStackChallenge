import { Request, Response, NextFunction } from "express";
import { tUserRepo } from "../interfaces/user.interface";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors";

const uniqueUsernameMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: tUserRepo = AppDataSource.getRepository(User);
  const foundUsername = await userRepository.find({
    where: {
      username: req.body.username,
    },
  });
  if (foundUsername) {
    throw new AppError("Username already exists", 401);
  }
  return next();
};
export { uniqueUsernameMiddleware };
