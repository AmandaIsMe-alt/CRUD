import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const verifyIsAdmin = async(req: Request, res: Response, next: NextFunction) => {
    if(!req.user.isAdm){
        throw new AppError('Permission adm is necessary', 403)
    }
    next();
}

export default verifyIsAdmin;