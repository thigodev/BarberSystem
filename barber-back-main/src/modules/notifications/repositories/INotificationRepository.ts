import type ICreateNotificationDTO from '../dtos/ICreateNotificationDTO'
import type Notification from '../infra/typeorm/schemas/Notification'

export default interface INotifcationRepository {
  create: (data: ICreateNotificationDTO) => Promise<Notification>
}
