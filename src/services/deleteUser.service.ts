import AppDataSource from "../data-source";
import AppError from "../errors/AppError";

import { User } from "../entities/user.entity";

const deleteUserService = async (id:string, isActive:Boolean) => {
    const repository = AppDataSource.getRepository(User)

    const findUser = await repository.findOneBy({ id: id })

    if(!findUser){
        throw new AppError('Id não encontrado', 404)
    } else if(!findUser.isActive){
        throw new AppError('Usuário não existe', 400)
    }

    findUser.isActive = false

    await repository.save(findUser)
    
};

export default deleteUserService;
