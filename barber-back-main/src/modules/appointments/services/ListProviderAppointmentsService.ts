import type Appointment from "../infra/typeorm/entities/Appointment";

import IAppointmentRepository from "../repositories/IAppointmentsRepository";
import { classToPlain } from "class-transformer";

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

class ListProviderAppointmentsService {
  constructor(
    private readonly appointmentsRepository: IAppointmentRepository
  ) {}

  public async execute({
    provider_id,
    year,
    month,
    day,
  }: IRequest): Promise<Appointment[]> {
    const appointments =
      await this.appointmentsRepository.findAllInDayFromProvider({
        provider_id,
        year,
        month,
        day,
      });

    return appointments;
  }
}

export default ListProviderAppointmentsService;
