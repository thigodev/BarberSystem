import FakeAppointmentsRepository from "../repositories/fakes/FakeAppointmentsRepository";
import ListProviderMonthAvailabilityService from "./ListProviderMonthAvailabilityService";

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe("ListProviderMonthAvailabilityService", () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository
    );
  });

  test("Should be able to list the month availability from provider", async () => {
    await fakeAppointmentsRepository.create({
      provider_id: "user",
      user_id: "user_id",
      date: new Date(2023, 11, 5, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: "user",
      user_id: "user_id",
      date: new Date(2023, 11, 6, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: "user",
      user_id: "user_id",
      date: new Date(2023, 11, 6, 9, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: "user",
      user_id: "user_id",
      date: new Date(2023, 11, 6, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: "user",
      user_id: "user_id",
      date: new Date(2023, 11, 6, 11, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: "user",
      user_id: "user_id",
      date: new Date(2023, 11, 6, 12, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: "user",
      user_id: "user_id",
      date: new Date(2023, 11, 6, 13, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: "user",
      user_id: "user_id",
      date: new Date(2023, 11, 6, 14, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: "user",
      user_id: "user_id",
      date: new Date(2023, 11, 6, 15, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: "user",
      user_id: "user_id",
      date: new Date(2023, 11, 6, 16, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: "user",
      user_id: "user_id",
      date: new Date(2023, 11, 6, 17, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: "user",
      user_id: "user_id",
      date: new Date(2023, 11, 7, 8, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: "user",
      year: 2023,
      month: 11,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 1, available: false },
        { day: 2, available: false },
        { day: 3, available: false },
        { day: 4, available: false },
        { day: 5, available: false },
        { day: 6, available: false },
        { day: 7, available: false },
        { day: 8, available: false },
        { day: 9, available: false },
        { day: 10, available: false },
        { day: 11, available: false },
        { day: 12, available: false },
        { day: 13, available: false },
        { day: 14, available: false },
        { day: 15, available: false },
        { day: 16, available: false },
        { day: 17, available: false },
        { day: 18, available: false },
        { day: 19, available: false },
        { day: 20, available: false },
        { day: 21, available: false },
        { day: 22, available: false },
        { day: 23, available: false },
        { day: 24, available: false },
        { day: 25, available: false },
        { day: 26, available: false },
        { day: 27, available: false },
        { day: 28, available: false },
        { day: 29, available: false },
        { day: 30, available: false },
      ])
    );
  });
});
