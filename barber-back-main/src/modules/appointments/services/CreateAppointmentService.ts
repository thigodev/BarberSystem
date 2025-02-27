import { startOfHour, isBefore, getHours, format } from "date-fns";

import AppError from "../../../shared/errors/AppError";

import type Appointment from "../infra/typeorm/entities/Appointment";

import IAppointmentRepository from "../repositories/IAppointmentsRepository";
import INotifcationRepository from "../../../modules/notifications/repositories/INotificationRepository";

interface IRequest {
  provider_id: string;
  user_id: string;
  date: Date;
}

class CreateBetService {
  constructor(
    private readonly appointmentsRepository: IAppointmentRepository,

    private readonly notificationsRepository: INotifcationRepository
  ) {}

  public async execute({
    date,
    provider_id,
    user_id,
  }: IRequest): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    if (isBefore(appointmentDate, Date.now())) {
      throw new AppError(
        "Você não podde criar um compromisso em uma data que já passou."
      );
    }

    if (user_id === provider_id) {
      throw new AppError("Você não pode fazer uma compromisso com você mesmo.");
    }

    if (getHours(appointmentDate) < 8 || getHours(appointmentDate) > 18) {
      throw new AppError(
        "Você pode criar somente compromisso entre 8am e 18pm."
      );
    }

    const findAppointmentInSameDate =
      await this.appointmentsRepository.findByDate(
        appointmentDate,
        provider_id
      );

    if (findAppointmentInSameDate) {
      throw new AppError("Este compromisso já está agendado");
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      user_id,
      date: appointmentDate,
    });

    const dateFormated = format(appointmentDate, "dd/MM/yyyy 'às' HH:mm'h'");

    await this.notificationsRepository.create({
      recipient_id: provider_id,
      content: `Novo agendamento para dia ${dateFormated}`,
    });

    return appointment;
  }
}

export default CreateBetService;
