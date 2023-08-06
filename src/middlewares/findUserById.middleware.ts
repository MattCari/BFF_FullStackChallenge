import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { tUser, tUserRepo } from "../interfaces/user.interface";
import { User } from "../entities/user.entity";

const findUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: tUserRepo = AppDataSource.getRepository(User);

  const findUser: tUser | null = await userRepository.findOne({
    where: { id: Number(res.locals.id) },
    relations: { contacts: true },
  });
  if (!findUser) {
    throw new AppError("User not found", 404);
  }
  res.locals.foundUser = findUser;
  return next();
};

export default findUserMiddleware;
