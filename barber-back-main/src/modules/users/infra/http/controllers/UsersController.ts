import { Request, Response } from "express";

import { classToPlain } from "class-transformer";

import CreateUserService from "../../../services/CreateUsersService";

class UsersController {
  constructor(private createUser: CreateUserService) {}
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, barber } = request.body;

    try {
      const user = await this.createUser.execute({
        barber,
        name,
        email,
        password,
      });

      return response.json(classToPlain(user));
    } catch (err) {
      return response.json(err);
    }
  }
}

export default UsersController;
