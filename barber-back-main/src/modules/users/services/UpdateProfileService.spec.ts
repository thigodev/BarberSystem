import AppError from "../../../shared/errors/AppError";

import FakeHashProvider from "../providers/HashProvider/fakes/FakeHashProvider";
import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository";

import UpdateProfileService from "./UpdateProfileService";

let fakeHashProvider: FakeHashProvider;
let fakeUsersRepository: FakeUsersRepository;
let updateProfileService: UpdateProfileService;

describe("UpdateProfileService", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider
    );
  });

  test("Should be able update the profile", async () => {
    const user = await fakeUsersRepository.create({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    const updateUser = await updateProfileService.execute({
      user_id: user.id,
      name: "Artur Davi",
      email: "artur@gmail.com",
    });

    expect(updateUser.name).toBe("Artur Davi");
    expect(updateUser.email).toBe("artur@gmail.com");
  });

  test("Should not be able if user non-existing", async () => {
    await expect(
      updateProfileService.execute({
        user_id: "non-existing",
        name: "Davi Artur",
        email: "davi@gmail.com",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  test("Should be able to update the password", async () => {
    const user = await fakeUsersRepository.create({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    const updateUser = await updateProfileService.execute({
      user_id: user.id,
      name: "Artur Davi",
      email: "artur@gmail.com",
      old_password: "123456",
      password: "654321",
    });

    expect(updateUser.password).toBe("654321");
  });

  test("Should be able to change to another user email", async () => {
    await fakeUsersRepository.create({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    const user = await fakeUsersRepository.create({
      barber: false,
      name: "test",
      email: "test@gmail.com",
      password: "123456",
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: "Artur Davi ",
        email: "davi@gmail.com",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  test("Should be able to update the password whithout old password", async () => {
    await fakeUsersRepository.create({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    const user = await fakeUsersRepository.create({
      barber: false,
      name: "test",
      email: "test@gmail.com",
      password: "123456",
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: "Artur Davi ",
        email: "davi@gmail.com",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  test("Should be able to update the password whithout old password", async () => {
    const user = await fakeUsersRepository.create({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: "Artur Davi ",
        email: "davi@gmail.com",
        password: "123123",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  test("Should not be able to update the password with wrong old password", async () => {
    const user = await fakeUsersRepository.create({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: "Artur Davi",
        email: "davi@gmail.com",
        old_password: "wrong-old-password",
        password: "123123",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
