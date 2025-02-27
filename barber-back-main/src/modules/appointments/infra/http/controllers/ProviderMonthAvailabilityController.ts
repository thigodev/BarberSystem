import { type Request, type Response } from "express";

import ListProviderMonthAvailabilityService from "../../../../../modules/appointments/services/ListProviderMonthAvailabilityService";

export default class ProviderMonthAvailabilityController {
  constructor(
    private listProviderMothAvailabilityService: ListProviderMonthAvailabilityService
  ) {}
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.query;

    try {
      const availability =
        await this.listProviderMothAvailabilityService.execute({
          provider_id,
          month: Number(month),
          year: Number(year),
        });

      return response.json(availability);
    } catch (err) {
      return response.json(err);
    }
  }
}
