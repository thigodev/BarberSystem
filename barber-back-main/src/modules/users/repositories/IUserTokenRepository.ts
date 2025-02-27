import type UserToken from '../infra/typeorm/entities/UserToken'

export default interface IUserTokenRepository {
  generated: (user_id: string) => Promise<UserToken>
  findByToken: (token: string) => Promise<UserToken | null>
}
