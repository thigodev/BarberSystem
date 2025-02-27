import type IMailProvider from '../models/IMailProvider'
import type ISendMailDTO from '../dtos/ISendMailDTO'

class FakeMailProvider implements IMailProvider {
  private readonly message: ISendMailDTO[] = []

  public async sendMail (message: ISendMailDTO): Promise<void> {
    this.message.push(message)
  }
}

export default FakeMailProvider
