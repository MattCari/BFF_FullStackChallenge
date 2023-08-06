import { Request, Response, NextFunction } from "express";
import { tUserRepo } from "../interfaces/user.interface";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors";

const uniqueEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: tUserRepo = AppDataSource.getRepository(User);
  const foundEmail = await userRepository.find({
    where: {
      email: req.body.email,
    },
  });
  if (foundEmail) {
    throw new AppError("Email already registered", 401);
  }
  return next();
};
export { uniqueEmailMiddleware };
