import AppointmentsRepository from "../repositories/AppointmentsRepository";
import NotificationsRepository from "../../../../../modules/notifications/repositories/fakes/FakeNotificationsRepository";
import UsersRepository from "../../../../../modules/users/infra/typeorm/repositories/UsersRepository";

import CreateBetService from "../../../services/CreateAppointmentService";
import ListProviderDayAvailabilityService from "../../../services/ListProviderDayAvailabilityService";
import ListProviderMonthAvailabilityService from "../../../services/ListProviderMonthAvailabilityService";
import ListProvidersService from "../../../services/ListProvidersService";
import AppointmentController from "../../http/controllers/AppointmentsController";
import ListProviderAppointmentsService from "../../../services/ListProviderAppointmentsService";
import ProviderAppointmentsController from "../../http/controllers/ProviderAppointmentsController";
import ProviderDayAvailbilityController from "../../http/controllers/ProviderDayAvailabilityController";
import ProviderMonthAvailabilityController from "../../http/controllers/ProviderMonthAvailabilityController";
import ProvidersController from "../../http/controllers/ProvidersController";

export const AppointmentFactory = () => {
  const appointmentRepository = new AppointmentsRepository();
  const notificationRepository = new NotificationsRepository();
  const createAppointmentService = new CreateBetService(
    appointmentRepository,
    notificationRepository
  );
  const appointmentController = new AppointmentController(
    createAppointmentService
  );
  const listProviderAppointmentsService = new ListProviderAppointmentsService(
    appointmentRepository
  );
  const providerAppointmentController = new ProviderAppointmentsController(
    listProviderAppointmentsService
  );
  const providerDayAvailabilityService = new ListProviderDayAvailabilityService(
    appointmentRepository
  );
  const providerDayAvailabilityController =
    new ProviderDayAvailbilityController(providerDayAvailabilityService);
  const listProviderMonthAvailabilityService =
    new ListProviderMonthAvailabilityService(appointmentRepository);
  const providerMonthAvailabilityController =
    new ProviderMonthAvailabilityController(
      listProviderMonthAvailabilityService
    );
  const usersRepository = new UsersRepository();
  const listProviderService = new ListProvidersService(usersRepository);
  const providerController = new ProvidersController(listProviderService);

  return {
    appointmentController,
    providerAppointmentController,
    providerDayAvailabilityController,
    providerMonthAvailabilityController,
    providerController,
  };
};
