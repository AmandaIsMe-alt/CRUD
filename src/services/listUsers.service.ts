import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import listUsersSerializer from "../serializer/listUsers.serializer";

const listUsersService = async (): Promise<any> => {
  const repository = AppDataSource.getRepository(User);
  const users = await repository.find();

  const listUsers = await listUsersSerializer.validate(users, { stripUnknown: true })

  return listUsers ;
};

export default listUsersService;