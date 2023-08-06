import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities/user.entity";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userUpdateSchema,
  userLoginSchema,
  userContactsSchema,
} from "../schemas/user.schema";

type tUser = z.infer<typeof userSchema>;
type tUserRequest = z.infer<typeof userSchemaRequest>;
type tUserResponse = z.infer<typeof userSchemaResponse>;
type tUserLogin = z.infer<typeof userLoginSchema>;
type tUserUpdate = DeepPartial<typeof userUpdateSchema>;
type tUserContacts = z.infer<typeof userContactsSchema>
type tUserRepo = Repository<User>;

export {
  tUser,
  tUserLogin,
  tUserRequest,
  tUserResponse,
  tUserUpdate,
  tUserRepo,
  tUserContacts
};
