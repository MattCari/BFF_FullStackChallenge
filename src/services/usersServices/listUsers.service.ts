import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { tUserRepo, tUserResponse } from "../../interfaces/user.interface";
import { manyUsersSchema } from "../../schemas/user.schema";

const listUsersService = async (): Promise<tUserResponse[]> => {
    const userRepository:tUserRepo = AppDataSource.getRepository(User)
    const allUsers: tUserResponse[] = await userRepository.find({relations:{contacts:true}})
    return manyUsersSchema.parse(allUsers)
}

export {listUsersService}