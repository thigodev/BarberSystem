import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import { AppointmentFactory } from "../../typeorm/factory/AppointmentFactory";

import ensureAuthenticated from "../../../../users/infra/http/middlewares/ensureAuthenticated";

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  (request, response) =>
    AppointmentFactory().appointmentController.create(request, response)
);
appointmentsRouter.get("/me", (request, response) =>
  AppointmentFactory().providerAppointmentController.index(request, response)
);

export default appointmentsRouter;
