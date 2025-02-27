import { type Request, type Response } from "express";

import ListProviderDayAvailabilityService from "../../../../../modules/appointments/services/ListProviderDayAvailabilityService";

export default class ProviderDayAvailbilityController {
  constructor(
    private listProviderDayAvailabilityService: ListProviderDayAvailabilityService
  ) {}
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { year, month, day } = request.query;

    try {
      const availability =
        await this.listProviderDayAvailabilityService.execute({
          provider_id,
          year: Number(year),
          month: Number(month),
          day: Number(day),
        });

      return response.json(availability);
    } catch (err) {
      return response.json(err);
    }
  }
}
