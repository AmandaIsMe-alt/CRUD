import { Request, Response } from "express";
import { IUser } from "../interfaces/users";
import createUserService from "../services/createUser.service";

const createUserController = async(req: Request, res: Response) =>{
    const user: IUser = req.body
    const [status, create] = await createUserService(user)
    return res.status(status as number).json(create)
}

export default createUserController;