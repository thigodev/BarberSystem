import { AppDataSource } from "../../../../../shared/infra/database";
import { type Repository, Raw } from "typeorm";

import type IAppointmentsRepository from "../../../repositories/IAppointmentsRepository";

import type ICreateAppointmentDTO from "../../../dtos/ICreateAppointmentDTO";
import type IFindAllInMonthFromProviderDTO from "modules/appointments/dtos/IFindAllInMonthFromProviderDTO";
import type IFindAllInDayFromProviderDTO from "modules/appointments/dtos/IFindAllInDayFromProviderDTO";

import Appointment from "../entities/Appointment";

class AppointmentsRepository implements IAppointmentsRepository {
  private readonly ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Appointment);
  }

  public async findByDate(
    date: Date,
    provider_id: string
  ): Promise<Appointment | null> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date, provider_id },
    });

    return findAppointment;
  }

  public async findAllInMonthFromProvider({
    provider_id,
    month,
    year,
  }: IFindAllInMonthFromProviderDTO): Promise<Appointment[]> {
    const parsedMonth = String(month).padStart(2, "0");

    const appointments = await this.ormRepository.find({
      where: {
        provider_id,
        date: Raw(
          (dateFieldName) =>
            `to_char(${dateFieldName}, 'MM-YYYY') = '${parsedMonth}=${year}'`
        ),
      },
    });

    return appointments;
  }

  public async findAllInDayFromProvider({
    provider_id,
    day,
    month,
    year,
  }: IFindAllInDayFromProviderDTO): Promise<Appointment[]> {
    const parsedDay = String(day).padStart(2, "0");
    const parsedMonth = String(month).padStart(2, "0");

    const appointments = await this.ormRepository.find({
      where: {
        provider_id,
        date: Raw(
          (dateFieldName) =>
            `to_char(${dateFieldName}, 'DD-MM-YYYY') = '${parsedDay}-${parsedMonth}-${year}'`
        ),
      },
      relations: ["user"],
    });

    return appointments;
  }

  public async create({
    date,
    provider_id,
    user_id,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.ormRepository.create({
      date,
      provider_id,
      user_id,
    });

    await this.ormRepository.save(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
