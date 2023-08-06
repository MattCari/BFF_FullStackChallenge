import { Request, Response } from "express";
import { removeContactService } from "../../services/usersServices/removeContact.service";


const removeContactCotroller = async (req:Request,res:Response): Promise<Response> => {
    const foundUser = res.locals.foundUser
    const {id} = req.params

    await removeContactService(foundUser,+id)
    return res.status(200).json("contact removed")
}
export {removeContactCotroller}