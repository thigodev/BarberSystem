import type Appointment from '../infra/typeorm/entities/Appointment'

import type ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO'
import type IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO'
import type IFindAllInDayFromProviderDTO from '../dtos/IFindAllInDayFromProviderDTO'

export default interface IAppointmentRepository {
  create: (data: ICreateAppointmentDTO) => Promise<Appointment>
  findByDate: (date: Date, provider_id: string) => Promise<Appointment | null>
  findAllInMonthFromProvider: (data: IFindAllInMonthFromProviderDTO) => Promise<Appointment[]>
  findAllInDayFromProvider: (data: IFindAllInDayFromProviderDTO) => Promise<Appointment[]>
}
