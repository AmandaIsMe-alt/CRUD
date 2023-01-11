import AppDataSource from "../data-source";
import AppError from "../errors/AppError";

import { User } from "../entities/user.entity";
import { IUser } from "../interfaces/users";

const createUserService = async (data: IUser): Promise<Array<User | number | string | {}>> => {

  const repository = AppDataSource.getRepository(User);
  
  const verifyEmail = await repository.findOneBy({ email: data.email });

  if (verifyEmail) {
    throw new AppError('Email already exist', 400)
  }

  const user = repository.create(data);

  await repository.save(user);

  const {password, ...newData} = user

  return [201, newData];
};

export default createUserService;
