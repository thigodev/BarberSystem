import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import { UserFactory } from "../../typeorm/factorys/UserFactory";

const profileRouter = Router();

profileRouter.use(ensureAuthenticated);

profileRouter.put(
  "/update",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string(),
      password_confirmation: Joi.string().valid(Joi.ref("password")),
    },
  }),
  (request, response) =>
    UserFactory().profileController.update(request, response)
);
profileRouter.get("/list", (request, response) =>
  UserFactory().profileController.show(request, response)
);

export default profileRouter;
