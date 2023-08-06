import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import {
  tUserRepo,
  tUserResponse,
} from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/user.schema";

const listUserByIdService = async (
  id: number
): Promise<tUserResponse | null> => {
    const userRepository: tUserRepo = AppDataSource.getRepository(User);
    const foundUser: tUserResponse | null = await userRepository.findOne({
      where: { id: id},
    });
  return userSchemaResponse.parse(foundUser);
};

export { listUserByIdService };
