import { Router } from "express";
import { Segments, celebrate, Joi } from "celebrate";

import ensureAuthenticated from "../../../../../modules/users/infra/http/middlewares/ensureAuthenticated";
import { AppointmentFactory } from "../../typeorm/factory/AppointmentFactory";

const providersRouter = Router();

providersRouter.use(ensureAuthenticated);

providersRouter.get("/list", (request, response) =>
  AppointmentFactory().providerController.index(request, response)
);
providersRouter.get(
  "/:provider_id/month-availability",
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  (request, response) =>
    AppointmentFactory().providerMonthAvailabilityController.index(
      request,
      response
    )
);
providersRouter.get(
  "/:provider_id/day-availability",
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  (request, response) =>
    AppointmentFactory().providerDayAvailabilityController.index(
      request,
      response
    )
);

export default providersRouter;
