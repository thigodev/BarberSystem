import { request, Router } from "express";
import { Segments, celebrate, Joi } from "celebrate";

import { UserFactory } from "../../typeorm/factorys/UserFactory";

const passwordRouter = Router();

passwordRouter.post(
  "/forgot",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  (request, response) =>
    UserFactory().forgotPasswordController.create(request, response)
);

passwordRouter.post(
  "/reset",
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref("password")),
    },
  }),
  (request, response) =>
    UserFactory().resetPasswordController.create(request, response)
);

export default passwordRouter;
