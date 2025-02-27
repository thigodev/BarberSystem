import { type Request, type Response } from "express";

import { classToPlain } from "class-transformer";

import UploadUserAvatarService from "../../../services/UploadUserAvatarService";

class UserAvatarController {
  constructor(private updateUserAvatar: UploadUserAvatarService) {}
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.updateUserAvatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file?.filename,
      });

      return response.json(classToPlain(user));
    } catch (err) {
      return response.json(err);
    }
  }
}

export default UserAvatarController;
