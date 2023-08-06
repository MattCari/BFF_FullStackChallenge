import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  username: z.string().max(25),
  email: z.string().email().or(z.array(z.string().email())),
  password: z.string().max(127),
  name: z.string().max(124),
  tel: z.string().or(z.array(z.string())),
  joined_in: z.string().or(z.date()),
});

const userLoginSchema = userSchema.pick({
  username: true,
  password: true,
});

const contactSchema = userSchema.omit({
  password: true,
  joined_in: true,
});

const userSchemaRequest = userSchema.omit({
  id: true,
  joined_in: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
})

const userContactsSchema = userSchemaResponse.extend({
  contacts: z.array(contactSchema).nullable()
})

const manyUsersSchema = z.array(userSchemaResponse);

const userUpdateSchema = userSchema
  .omit({
    id: true,
  })
  .partial();


export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userUpdateSchema,
  manyUsersSchema,
  userLoginSchema,
  userContactsSchema
};
