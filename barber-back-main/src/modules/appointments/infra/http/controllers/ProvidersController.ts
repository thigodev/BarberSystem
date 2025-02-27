import { type Request, type Response } from "express";
import { classToPlain } from "class-transformer";

import ListProvidersService from "../../../../../modules/appointments/services/ListProvidersService";

export default class ProvidersController {
  constructor(private listProvidersService: ListProvidersService) {}
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    try {
      const providers = await this.listProvidersService.execute({
        user_id,
      });

      return response.json(classToPlain(providers));
    } catch (err) {
      return response.json(err);
    }
  }
}
