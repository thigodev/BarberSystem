import AppError from "../../../shared/errors/AppError";

import FakeNotificationsRepository from "../../notifications/repositories/fakes/FakeNotificationsRepository";
import FakeAppointmentsRepository from "../repositories/fakes/FakeAppointmentsRepository";
import CreateAppointmentService from "./CreateAppointmentService";

let fakeNoticationsRepository: FakeNotificationsRepository;
let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe("CreateAppointment", () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeNoticationsRepository = new FakeNotificationsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
      fakeNoticationsRepository
    );
  });

  test("Should be able to create a new appointment", async () => {
    jest.spyOn(Date, "now").mockImplementationOnce(() => {
      return new Date(2023, 12, 6, 12).getDate();
    });

    const appointment = await createAppointment.execute({
      date: new Date(2023, 12, 6, 13),
      provider_id: "provider_id",
      user_id: "user_id",
    });

    expect(appointment).toHaveProperty("id");
    expect(appointment.provider_id).toBe("provider_id");
  });

  test("Should not be able to create two appointments on the same time", async () => {
    jest.spyOn(Date, "now").mockImplementationOnce(() => {
      return new Date(2023, 12, 6, 12).getDate();
    });

    const appointmentDate = new Date(2023, 12, 6, 12);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: "provider_id",
      user_id: "user_id",
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: "provider_id",
        user_id: "user_id",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  test("Should not be able to create an appointments on past date", async () => {
    jest.spyOn(Date, "now").mockImplementationOnce(() => {
      return new Date(2023, 12, 6, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2023, 12, 6, 11),
        user_id: "user_id",
        provider_id: "provider_id",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  test("Should not be able to create an appointments with send user as provider", async () => {
    jest.spyOn(Date, "now").mockImplementationOnce(() => {
      return new Date(2023, 12, 6, 12).getDate();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2023, 12, 6, 13),
        user_id: "user_id",
        provider_id: "user_id",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  test("Should not be able to create an appointments before 8am and after 6pm", async () => {
    jest.spyOn(Date, "now").mockImplementationOnce(() => {
      return new Date(2023, 12, 6, 12).getDate();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2023, 12, 7, 7),
        user_id: "user_id",
        provider_id: "provider_id",
      })
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createAppointment.execute({
        date: new Date(2023, 12, 7, 19),
        user_id: "user_id",
        provider_id: "provider_id",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
