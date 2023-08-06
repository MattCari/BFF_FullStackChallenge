import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { tUser, tUserRepo, tUserResponse, tUserUpdate } from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/user.schema";

const updateUserService = async (data: tUserUpdate , foundUser: tUser | null): Promise<tUserResponse> => {

    const userRepo: tUserRepo = AppDataSource.getRepository(User)

    await userRepo.save({...foundUser,...data})
    return userSchemaResponse.parse(foundUser)
};
 export {updateUserService}