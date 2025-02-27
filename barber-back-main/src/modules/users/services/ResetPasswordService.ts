import { isAfter, addHours } from "date-fns";

import AppError from "../../../shared/errors/AppError";

import IUsersRepository from "../repositories/IUsersRepository";
import IUserTokenRepository from "../repositories/IUserTokenRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";

interface IRequest {
  token: string;
  password: string;
}

class ResetPasswordService {
  constructor(
    private readonly usersRepository: IUsersRepository,

    private readonly usersTokenRepository: IUserTokenRepository,

    private readonly hashProvider: IHashProvider
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.usersTokenRepository.findByToken(token);

    if (!userToken) {
      throw new AppError("Token de usuário não existe");
    }
    const user = await this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError("Token de usuário não existe");
    }

    const tokenCreatedAt = userToken.created_at;
    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError("Expirou o token");
    }

    user.password = await this.hashProvider.generateHash(password);

    await this.usersRepository.save(user);
  }
}

export default ResetPasswordService;
