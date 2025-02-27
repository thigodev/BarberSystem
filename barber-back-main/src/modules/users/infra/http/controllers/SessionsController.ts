import { type Request, type Response } from "express";
import { classToPlain } from "class-transformer";

import AuthenticateUserService from "../../../services/AuthenticateUserService";

class SessionController {
  constructor(private sessionService: AuthenticateUserService) {}
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const { user, token } = await this.sessionService.execute({
      email,
      password,
    });

    return response.json({ user: classToPlain(user), token });
  }
}

export default SessionController;
