import { v4 as uuidv4 } from 'uuid'

import type IUsersRepository from '../IUsersRepository'

import type IFindAllProvidersDTO from 'modules/users/dtos/IFindAllProvidersDTO'
import type ICreateUserDTO from 'modules/users/dtos/ICreateUserDTO'

import User from '../../infra/typeorm/entities/User'

class FakeUsersRepository implements IUsersRepository {
  private readonly users: User[] = []

  public async findById (id: string): Promise<User | null> {
    const findUser = this.users.find(user => user.id === id)

    if (!findUser) {
      return null
    }
    return findUser
  }

  public async findByEmail (email: string): Promise<User | null> {
    const findUser = this.users.find(user => user.email === email)

    if (!findUser) {
      return null
    }
    return findUser
  }

  public async findAllProviders ({ except_user_id }: IFindAllProvidersDTO): Promise<User[]> {
    let { users } = this

    if (except_user_id) {
      users = this.users.filter(user => user.id !== except_user_id)
    }
    return users
  }

  public async create (userData: ICreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, { id: uuidv4() }, userData)

    this.users.push(user)

    return user
  }

  public async save (user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id)

    this.users[findIndex] = user

    return user
  }
}
export default FakeUsersRepository
