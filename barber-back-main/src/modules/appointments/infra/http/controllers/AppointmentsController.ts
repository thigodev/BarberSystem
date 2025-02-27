import { type Request, type Response } from "express";
import CreateappointmentService from "../../../services/CreateAppointmentService";

export default class AppointmentController {
  constructor(private createappointment: CreateappointmentService) {}
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id, date } = request.body;

    try {
      const appointment = await this.createappointment.execute({
        date,
        provider_id,
        user_id,
      });

      return response.json(appointment);
    } catch (err) {
      return response.json(err);
    }
  }
}
