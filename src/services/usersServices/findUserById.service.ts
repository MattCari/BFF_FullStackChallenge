import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import {
  tUserRepo,
  tUserResponse,
} from "../../interfaces/user.interface";
import { userContactsSchema, userSchemaResponse } from "../../schemas/user.schema";

const listUserByIdService = async (
  id: number
): Promise<tUserResponse | null> => {
    const userRepository: tUserRepo = AppDataSource.getRepository(User);
    const foundUser: tUserResponse | null = await userRepository.findOne({
      where: { id: id},
      relations: {contacts: true}
    });
    if(!foundUser){
      throw new AppError("User not found", 404)
    }
  return userContactsSchema.parse(foundUser);
};

export { listUserByIdService };
