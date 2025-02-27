import { AppDataSource } from "../../../../../shared/infra/database";
import { Not, type Repository } from "typeorm";

import type IUsersRepository from "../../../repositories/IUsersRepository";

import type IFindAllProvidersDTO from "../../../../../modules/users/dtos/IFindAllProvidersDTO";
import type ICreateUserDTO from "../../../dtos/ICreateUserDTO";

import User from "../entities/User";

class UsersRepository implements IUsersRepository {
  private readonly ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(User);
  }

  public async findById(id: string): Promise<User | null> {
    const user = await this.ormRepository.findOneBy({ id });

    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async findAllProviders({
    except_user_id,
  }: IFindAllProvidersDTO): Promise<User[]> {
    let users: User[];

    if (except_user_id) {
      users = await this.ormRepository.find({
        where: {
          barber: true,
          id: Not(except_user_id),
        },
      });
    } else {
      users = await this.ormRepository.find();
    }

    return users;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return await this.ormRepository.save(user);
  }
}

export default UsersRepository;
