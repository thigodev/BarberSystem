import IUserRepository from "../../../modules/users/repositories/IUsersRepository";

import type User from "../../../modules/users/infra/typeorm/entities/User";

interface IRequest {
  user_id: string;
}

class ListProvidersService {
  constructor(private readonly usersRepository: IUserRepository) {}

  public async execute({ user_id }: IRequest): Promise<User[]> {
    const users = await this.usersRepository.findAllProviders({
      except_user_id: user_id,
    });

    return users;
  }
}

export default ListProvidersService;
