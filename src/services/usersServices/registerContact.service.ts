import { User } from "../../entities/user.entity";
import {
  tUser,
  tUserContacts,
  tUserResponse,
} from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import {
  userContactsSchema,
} from "../../schemas/user.schema";

const registerContactService = async (
  foundUser: tUserResponse | undefined,
  contactId: number
): Promise<tUserResponse> => {
  const userRepo = AppDataSource.getRepository(User);
  const foundContact: tUser | null = await userRepo.findOne({
    relations: {contacts: true},
    where: { id: contactId },
  });

  if (!foundContact) {
    throw new AppError("User not found, cannot create contact!!", 404);
  }
  AppDataSource.getRepository(User)
    .createQueryBuilder()
    .relation(User,'contacts')
    .of(foundUser!.id)
    .add(foundContact.id)
    
  return userContactsSchema.parse(foundUser);
};

export { registerContactService };
