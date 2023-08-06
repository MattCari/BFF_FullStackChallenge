import { Request, Response } from "express";
import { tUserResponse } from "../../interfaces/user.interface";
import { listUsersService } from "../../services/usersServices/listUsers.service";

const listUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const users: tUserResponse[] = await listUsersService();
  
    return res.status(200).json(users);
  };
  
  export {listUserController}