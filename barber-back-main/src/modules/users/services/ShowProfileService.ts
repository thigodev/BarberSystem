import AppError from "../../../shared/errors/AppError";

import IUsersRepository from "../repositories/IUsersRepository";

import type User from "../infra/typeorm/entities/User";

interface IRequest {
  user_id: string;
}

class ShowProfileService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  public async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("Usuário não encontrado.");
    }

    return user;
  }
}

export default ShowProfileService;
