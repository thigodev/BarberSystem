import { type Request, type Response } from "express";

import ListProviderAppointmentsService from "../../../../../modules/appointments/services/ListProviderAppointmentsService";
import { classToPlain } from "class-transformer";

export default class ProviderAppointmentsController {
  constructor(
    private listProviderAppointments: ListProviderAppointmentsService
  ) {}
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { day, month, year } = request.query;

    try {
      const appointments = await this.listProviderAppointments.execute({
        provider_id,
        day: Number(day),
        month: Number(month),
        year: Number(year),
      });

      return response.json(classToPlain(appointments));
    } catch (err) {
      return response.json(err);
    }
  }
}
