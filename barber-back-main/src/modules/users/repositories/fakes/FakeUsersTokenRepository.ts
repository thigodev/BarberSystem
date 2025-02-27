import { v4 as uuidv4 } from 'uuid'

import type IUserTokenRepository from '../IUserTokenRepository'

import UserToken from '../../../../modules/users/infra/typeorm/entities/UserToken'

class FakeUserTokenRepository implements IUserTokenRepository {
  private readonly userTokens: UserToken[] = []

  public async generated (user_id: string): Promise<UserToken> {
    const userToken = new UserToken()

    Object.assign(userToken, {
      id: uuidv4(),
      token: uuidv4(),
      user_id,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.userTokens.push(userToken)

    return userToken
  }

  public async findByToken (token: string): Promise<UserToken | null> {
    const userToken = this.userTokens.find(findToken => findToken.token === token)

    if (!userToken) {
      return null
    }

    return userToken
  }
}

export default FakeUserTokenRepository
