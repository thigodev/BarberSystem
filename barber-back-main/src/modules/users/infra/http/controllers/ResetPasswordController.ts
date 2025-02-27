import { type Request, type Response } from "express";
import ResetPasswordService from "../../../../../modules/users/services/ResetPasswordService";

export default class ResetPasswordController {
  constructor(private resetPassword: ResetPasswordService) {}
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    try {
      await this.resetPassword.execute({
        password,
        token,
      });

      return response.status(204).json();
    } catch (err) {
      return response.json(err);
    }
  }
}
