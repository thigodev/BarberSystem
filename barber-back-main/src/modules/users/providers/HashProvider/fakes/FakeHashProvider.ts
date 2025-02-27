import type IHashProvider from '../models/IHashProvider'

class FakeHashProvider implements IHashProvider {
  public async generateHash (paylaod: string): Promise<string> {
    return paylaod
  }

  public async compareHash (payload: string, hashed: string): Promise<boolean> {
    return payload === hashed
  }
}

export default FakeHashProvider
