import AppError from "../../../shared/errors/AppError";

import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository";

import ShowProfileService from "./ShowProfileService";

let fakeUsersRepository: FakeUsersRepository;
let showProfileService: ShowProfileService;

describe("", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfileService = new ShowProfileService(fakeUsersRepository);
  });

  test("Should be able show the profile", async () => {
    const user = await fakeUsersRepository.create({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    const profile = await showProfileService.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe("Davi Artur");
    expect(profile.email).toBe("davi@gmail.com");
  });

  test("Should not be able show the profile from non existing user", async () => {
    await expect(
      showProfileService.execute({
        user_id: "non-existing",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
