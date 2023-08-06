import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { tUser, tUserRepo } from "../../interfaces/user.interface";


const deleteUserService = async (foundUser:tUser): Promise<void> => {
    const userRepository: tUserRepo = AppDataSource.getRepository(User)
    await userRepository.softRemove(foundUser)
    return
}
export {deleteUserService}