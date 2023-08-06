import { Request, Response } from "express";
import { listUserByIdService } from "../../services/usersServices/findUserById.service";
import { tUserResponse } from "../../interfaces/user.interface";

const listUserByIdController = async (req: Request,res:Response): Promise<Response> => {
    const {id} = req.params
    const foundUser:tUserResponse | null = await listUserByIdService(+id)
    return res.status(200).json(foundUser)
}

export {listUserByIdController}