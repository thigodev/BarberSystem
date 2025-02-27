import { type Request, type Response } from "express";

import { classToPlain } from "class-transformer";

import UpdateProfileService from "../../../services/UpdateProfileService";
import ShowProfileService from "../../../services/ShowProfileService";

export default class ProfileController {
  constructor(
    private showProfileService: ShowProfileService,
    private updateProfile: UpdateProfileService
  ) {}
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    try {
      const user = await this.showProfileService.execute({
        user_id,
      });

      return response.json(classToPlain(user));
    } catch (err) {
      return response.json(err);
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, email, old_password, password } = request.body;

    try {
      const user = await this.updateProfile.execute({
        user_id,
        name,
        email,
        old_password,
        password,
      });

      return response.json(classToPlain(user));
    } catch (err) {
      return response.json(err);
    }
  }
}
