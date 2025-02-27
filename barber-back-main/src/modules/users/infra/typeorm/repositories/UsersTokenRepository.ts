import { AppDataSource } from '../../../../../shared/infra/database'
import { type Repository } from 'typeorm'

import type IUserTokenRepository from '../../../repositories/IUserTokenRepository'

import UserToken from '../entities/UserToken'

class UsersTokenRepository implements IUserTokenRepository {
  private readonly ormRepository: Repository<UserToken>

  constructor () {
    this.ormRepository = AppDataSource.getRepository(UserToken)
  }

  public async findByToken (token: string): Promise<UserToken | null> {
    const userToken = await this.ormRepository.findOne({
      where: { token }
    })

    return userToken
  }

  public async generated (user_id: string): Promise<UserToken> {
    const userToken = this.ormRepository.create({
      user_id
    })

    await this.ormRepository.save(userToken)

    return userToken
  }
}

export default UsersTokenRepository
