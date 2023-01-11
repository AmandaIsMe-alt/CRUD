import 'dotenv/config';
import AppError from "../errors/AppError";
import AppDataSource from "../data-source";

import { User } from "../entities/user.entity";
import { IUserLogin } from "../interfaces/users";

import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";

const loginService = async ({email, password}: IUserLogin):Promise<string> => {

    const repository = AppDataSource.getRepository(User)

    const user = await repository.findOneBy({ email: email })

    if(!user){
        throw new AppError('User or password incorret', 403)
    }
    
    const verifyPassword = await compare(password, user.password)

    if(!verifyPassword){
        throw new AppError('User or passord incorret', 403)
    }

    const token = jwt.sign(
        {
            isAdm: user.isAdm,
            isActive: user.isActive
        },

        process.env.SECRET_KEY,

        {
            subject: user.id,
            expiresIn: '24h'
        }
    )

    return token;
};

export default loginService;
