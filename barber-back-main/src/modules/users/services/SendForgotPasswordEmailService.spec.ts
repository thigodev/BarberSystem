import AppError from "../../../shared/errors/AppError";

import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository";
import FakeMailProvider from "../../../shared/providers/MailProvider/fakes/FakeMailProvider";
import FakeUserTokenRepository from "../repositories/fakes/FakeUsersTokenRepository";
import SendForgotPasswordEmailService from "./SendForgotPasswordEmailService";

let fakeUsersRepository: FakeUsersRepository;
let fakeMailProvider: FakeMailProvider;
let fakeUserTokenRepository: FakeUserTokenRepository;
let sendForgotPasswordEmail: SendForgotPasswordEmailService;

describe("SendForgotPasswordEmail", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeMailProvider = new FakeMailProvider();
    fakeUserTokenRepository = new FakeUserTokenRepository();

    sendForgotPasswordEmail = new SendForgotPasswordEmailService(
      fakeUsersRepository,
      fakeMailProvider,
      fakeUserTokenRepository
    );
  });

  test("Should be able to recover the password using the email", async () => {
    const sendMail = jest.spyOn(fakeMailProvider, "sendMail");

    await fakeUsersRepository.create({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    await sendForgotPasswordEmail.execute({
      email: "davi@gmail.com",
    });

    expect(sendMail).toHaveBeenCalled();
  });

  test("Should not be able to recover a non-existing user password", async () => {
    await expect(
      sendForgotPasswordEmail.execute({
        email: "davi@gmail.com",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  test("Should generated a forgot password token", async () => {
    const generatedToken = jest.spyOn(fakeUserTokenRepository, "generated");

    const user = await fakeUsersRepository.create({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    await sendForgotPasswordEmail.execute({
      email: "davi@gmail.com",
    });

    expect(generatedToken).toHaveBeenCalledWith(user.id);
  });
});
