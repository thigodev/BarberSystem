import { type Request, type Response } from "express";

import SendForgotPasswordEmailService from "../../../../../modules/users/services/SendForgotPasswordEmailService";

export default class ForgotPasswordController {
  constructor(
    private sendForgotPasswordEmail: SendForgotPasswordEmailService
  ) {}
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    try {
      await this.sendForgotPasswordEmail.execute({
        email,
      });

      return response.status(204).json();
    } catch (err) {
      return response.json(err);
    }
  }
}
