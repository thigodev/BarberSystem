import type User from "../infra/typeorm/entities/User";

import AppError from "../../../shared/errors/AppError";

import IUsersRepository from "../repositories/IUsersRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";

interface IRequest {
  barber: boolean;
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(
    private readonly usersRepository: IUsersRepository,

    private readonly hashProvider: IHashProvider
  ) {}

  async execute({ name, barber, email, password }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError("Email já está em uso!");
    }

    const hasgedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      barber,
      name,
      email,
      password: hasgedPassword,
    });

    return user;
  }
}

export default CreateUserService;
