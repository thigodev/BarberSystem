import AppError from "../../../shared/errors/AppError";

import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository";
import FakeHashProvider from "../providers/HashProvider/fakes/FakeHashProvider";

import AuthenticateUserService from "./AuthenticateUserService";
import CreateUserService from "./CreateUsersService";

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let autheticateUser: AuthenticateUserService;
let createUser: CreateUserService;

describe("AuthenticateUserService", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    autheticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider
    );
    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  test("Should be able to authenticate", async () => {
    const user = await createUser.execute({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    const response = await autheticateUser.execute({
      email: "davi@gmail.com",
      password: "123456",
    });

    expect(response).toHaveProperty("token");
    expect(response.user).toEqual(user);
  });

  test("Should not be able to athenticate with no existing user", async () => {
    await expect(
      autheticateUser.execute({
        email: "davi@gmail.com",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  test("Should not be able to athenticate with wrong password", async () => {
    await createUser.execute({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    await expect(
      autheticateUser.execute({
        email: "davi@gmail.com",
        password: "wrong-password",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
