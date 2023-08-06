import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import {
  tUser,
  tUserContacts,
  tUserRepo,
  tUserResponse,
} from "../../interfaces/user.interface";
import { userContactsSchema } from "../../schemas/user.schema";

const removeContactService = async (
  foundUser: tUserContacts,
  contactId: number
): Promise<tUserResponse> => {
  
  AppDataSource.getRepository(User)
    .createQueryBuilder()
    .relation(User, "contacts")
    .of(foundUser!.id)
    .remove(contactId);

  return userContactsSchema.parse(foundUser);
};
export { removeContactService };
