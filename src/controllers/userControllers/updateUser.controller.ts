import { Request, Response } from "express";
import { tUser, tUserUpdate } from "../../interfaces/user.interface";
import { updateUserService } from "../../services/usersServices/updateUser.service";


const updateUserController = async (req:Request, res:Response): Promise<Response> => {
    const foundUser: tUser = res.locals.foundUser
    const payload: tUserUpdate = req.body

    const updatedUser = await updateUserService(payload,foundUser)
    return res.status(200).json(updatedUser)
}
export {updateUserController}