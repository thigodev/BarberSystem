import { getDate, getDaysInMonth, isAfter } from "date-fns";

import IAppointmentRepository from "../repositories/IAppointmentsRepository";

interface IRequst {
  provider_id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  available: boolean;
}>;

class ListProviderMonthAvailabilityService {
  constructor(
    private readonly appointmentsRepository: IAppointmentRepository
  ) {}

  public async execute({
    provider_id,
    month,
    year,
  }: IRequst): Promise<IResponse> {
    const appointments =
      await this.appointmentsRepository.findAllInMonthFromProvider({
        provider_id,
        month,
        year,
      });

    const numberOfDaysInMonth = getDaysInMonth(new Date(year, month - 1));

    const eachDaysArray = Array.from(
      { length: numberOfDaysInMonth },
      (_, index) => index + 1
    );

    const availability = eachDaysArray.map((day) => {
      const compareDate = new Date(year, month - 1, day, 23, 59, 59);

      const appointmentsInDay = appointments.filter((appointment) => {
        return getDate(appointment.date) === day;
      });

      return {
        day,
        available:
          isAfter(compareDate, new Date()) && appointmentsInDay.length < 10,
      };
    });

    return availability;
  }
}

export default ListProviderMonthAvailabilityService;
