import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";
import multer from "multer";
import uploadConfig from "../../../../../config/upload";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import { UserFactory } from "../../typeorm/factorys/UserFactory";

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      barber: Joi.boolean().required(),
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  (request, response) => UserFactory().userController.create(request, response)
);

usersRouter.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  (request, response) =>
    UserFactory().userAvatarController.update(request, response)
);

export default usersRouter;
