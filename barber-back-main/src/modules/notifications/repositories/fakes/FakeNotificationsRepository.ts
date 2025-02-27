import { ObjectId } from 'mongodb'

import type INotifcationRepository from '../INotificationRepository'
import type ICreateNotificationDTO from '../../../../modules/notifications/dtos/ICreateNotificationDTO'

import Notification from '../../infra/typeorm/schemas/Notification'

class NotificationsRepository implements INotifcationRepository {
  private readonly notifcations: Notification[] = []

  public async create ({
    content,
    recipient_id
  }: ICreateNotificationDTO): Promise<Notification> {
    const notifcation = new Notification()

    Object.assign(notifcation, { id: new ObjectId(), content, recipient_id })

    this.notifcations.push(notifcation)

    return notifcation
  }
}

export default NotificationsRepository
