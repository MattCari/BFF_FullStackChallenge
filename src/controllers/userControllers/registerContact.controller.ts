import { Request, Response } from "express";
import { registerContactService } from "../../services/usersServices/registerContact.service";
import { tUser, tUserResponse } from "../../interfaces/user.interface";

const registerContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const foundUser: tUserResponse = res.locals.foundUser;
  const { id } = req.params;

  const newContact = await registerContactService(foundUser, +id);
  return res.status(201).json(newContact);
};

export {registerContactController}