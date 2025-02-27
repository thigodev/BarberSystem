import { v4 as uuidv4 } from 'uuid'
import { isEqual, getMonth, getYear, getDate } from 'date-fns'

import type IAppointmentsRepository from '../IAppointmentsRepository'

import type ICreateAppointmentDTO from '../../dtos/ICreateAppointmentDTO'
import type IFindAllInMonthFromProviderDTO from 'modules/appointments/dtos/IFindAllInMonthFromProviderDTO'
import type IFindAllInDayFromProviderDTO from 'modules/appointments/dtos/IFindAllInDayFromProviderDTO'

import Appointment from '../../infra/typeorm/entities/Appointment'

class AppointmentsRepository implements IAppointmentsRepository {
  private readonly appointments: Appointment[] = []

  public async findByDate (date: Date, provider_id: string): Promise<Appointment | null> {
    const findAppointement = this.appointments.find(
      appointment => isEqual(appointment.date, date) && appointment.provider_id === provider_id
    )

    if (!findAppointement) {
      return null
    }

    return findAppointement
  }

  public async findAllInMonthFromProvider ({ provider_id, month, year }: IFindAllInMonthFromProviderDTO): Promise<Appointment[]> {
    const appointments = this.appointments.filter(
      appointment => {
        return (
          appointment.provider_id === provider_id &&
          getMonth(appointment.date) + 1 === month &&
          getYear(appointment.date) === year
        )
      }
    )

    return appointments
  }

  public async findAllInDayFromProvider ({ provider_id, month, year, day }: IFindAllInDayFromProviderDTO): Promise<Appointment[]> {
    const appointments = this.appointments.filter(
      appointment => {
        return (
          appointment.provider_id === provider_id &&
          getDate(appointment.date) === day &&
          getMonth(appointment.date) + 1 === month &&
          getYear(appointment.date) === year
        )
      }
    )

    return appointments
  }

  public async create ({ date, provider_id, user_id }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment()

    Object.assign(appointment, { id: uuidv4(), date, provider_id, user_id })

    this.appointments.push(appointment)

    return appointment
  }
}

export default AppointmentsRepository
