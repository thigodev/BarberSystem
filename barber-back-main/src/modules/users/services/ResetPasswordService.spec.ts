import AppError from "../../../shared/errors/AppError";

import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository";
import FakeUserTokenRepository from "../repositories/fakes/FakeUsersTokenRepository";
import FakeHashProvider from "../providers/HashProvider/fakes/FakeHashProvider";

import ResetPasswordService from "./ResetPasswordService";

let fakeHashProvider: FakeHashProvider;
let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokenRepository: FakeUserTokenRepository;
let resetPasswordService: ResetPasswordService;

describe("ResetServicePassword", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeUserTokenRepository = new FakeUserTokenRepository();
    fakeHashProvider = new FakeHashProvider();

    resetPasswordService = new ResetPasswordService(
      fakeUsersRepository,
      fakeUserTokenRepository,
      fakeHashProvider
    );
  });

  test("Should be able to reset the password", async () => {
    const user = await fakeUsersRepository.create({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    const { token } = await fakeUserTokenRepository.generated(user.id);

    const generatedHash = jest.spyOn(fakeHashProvider, "generateHash");

    await resetPasswordService.execute({
      password: "123321",
      token,
    });

    const updateuser = await fakeUsersRepository.findById(user.id);

    expect(generatedHash).toHaveBeenCalledWith("123321");
    expect(updateuser?.password).toBe("123321");
  });

  test("Should not be able to reset password with non-existing token", async () => {
    await expect(
      resetPasswordService.execute({
        token: "non-existing-token",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  test("Should not be able to reset password with non-existing token", async () => {
    const { token } = await fakeUserTokenRepository.generated(
      "non-existing-user"
    );

    await expect(
      resetPasswordService.execute({
        token,
        password: "123456",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  test("Should not ne able to reset paswword if passed more than 2 hours", async () => {
    const user = await fakeUsersRepository.create({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    const { token } = await fakeUserTokenRepository.generated(user.id);

    jest.spyOn(Date, "now").mockImplementationOnce(() => {
      const customDate = new Date();

      return customDate.setHours(customDate.getHours() + 3);
    });

    await expect(
      resetPasswordService.execute({
        password: "123321",
        token,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
