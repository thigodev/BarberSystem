import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";
import { UserFactory } from "../../typeorm/factorys/UserFactory";

const sessionsRouter = Router();

sessionsRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  (request, response) =>
    UserFactory().sessionController.create(request, response)
);

export default sessionsRouter;
