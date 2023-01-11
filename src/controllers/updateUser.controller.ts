import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/users";
import updateUserService from "../services/updateUser.service";

const updateUserController = async(req: Request, res: Response) =>{
    const isAdm = req.user.isAdm
    const newData : IUserUpdate = req.body
    const id = req.params.id

    const updateUser = await updateUserService(newData, id, isAdm)
    return res.json(updateUser)
}

export default updateUserController;