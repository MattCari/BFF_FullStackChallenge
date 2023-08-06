import { Request, Response } from "express";
import { deleteUserService } from "../../services/usersServices/deleteUser.service";


const deleteUserController = async (req:Request,res: Response): Promise<Response> => {
    const foundUser = res.locals.foundUser
    await deleteUserService(foundUser)

    return res.status(204).json()
}
export {deleteUserController}