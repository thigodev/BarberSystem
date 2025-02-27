import { AppDataSource } from '../../../../../shared/infra/mongodb'
import { type MongoRepository } from 'typeorm'

import type INotifcationRepository from '../../../../../modules/notifications/repositories/INotificationRepository'
import type ICreateNotificationDTO from '../../../../../modules/notifications/dtos/ICreateNotificationDTO'

import Notification from '../schemas/Notification'

class NotificationsRepository implements INotifcationRepository {
  private readonly ormRepository: MongoRepository<Notification>

  constructor () {
    // Caso não der certo, passar o name da conexão com o mongo
    this.ormRepository = AppDataSource.getMongoRepository(Notification)
  }

  public async create ({
    content,
    recipient_id
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = this.ormRepository.create({
      content,
      recipient_id
    })

    await this.ormRepository.save(notification)

    return notification
  }
}

export default NotificationsRepository
