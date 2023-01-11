import AppDataSource from "../data-source";
import AppError from "../errors/AppError";

import { User } from "../entities/user.entity";
import { IUserUpdate } from "../interfaces/users";


const updateUserService = async (data: IUserUpdate, userID: string, isAdm: boolean) => {

    if( Object.keys(data).length === 0){
        throw new AppError('Campo não pode ser alterado', 401)
    }

    const {name, email, password} = data

    const repository = AppDataSource.getRepository(User)
    const findUser = await repository.findOneBy({id: userID})

    if(!findUser){
        throw new AppError('Id não encontrado', 404)
    }

    if(!isAdm){
        throw new AppError('Permission adm is necessary', 401)
    }

    const updateUser = repository.create({
        ...findUser,
        name: name || findUser.name,
        password: password || findUser.password,
        email: email || findUser.email,
    })

    await repository.save(updateUser)

    return updateUser
};

export default updateUserService;
