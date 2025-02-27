import type User from '../infra/typeorm/entities/User'

import type IFindAllProvidersDTO from '../dtos/IFindAllProvidersDTO'
import type ICreateUserDTO from '../dtos/ICreateUserDTO'

export default interface IUsersRepository {
  findAllProviders: (data: IFindAllProvidersDTO) => Promise<User[]>
  findById: (id: string) => Promise<User | null>
  findByEmail: (email: string) => Promise<User | null>
  create: (data: ICreateUserDTO) => Promise<User>
  save: (user: User) => Promise<User>
}
