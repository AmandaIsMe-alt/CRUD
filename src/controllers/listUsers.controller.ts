import { Request, Response } from "express";
import listUsersService from "../services/listUsers.service";

const listUserController = async(req: Request, res: Response) =>{
    const listUsers = await listUsersService()
    return res.json(listUsers)
}

export default listUserController;