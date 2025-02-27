import AppError from "../../../shared/errors/AppError";

import FakeStorageProvider from "../../../shared/providers/StorageProvider/fakes/FakeStorageAvatar";
import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository";
import UpdateUserAvatarService from "./UploadUserAvatarService";

let fakeUsersRepository: FakeUsersRepository;
let fakeStorageProvider: FakeStorageProvider;
let updateUserAvatar: UpdateUserAvatarService;

describe("UpdateUserAvatar", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeStorageProvider = new FakeStorageProvider();

    updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider
    );
  });

  test("Should be able to update avatar user", async () => {
    const user = await fakeUsersRepository.create({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: "avatar.jpg",
    });

    expect(user.avatar).toBe("avatar.jpg");
  });

  test("Should not be able to update avatar from no existing user", async () => {
    await expect(
      updateUserAvatar.execute({
        user_id: "non-existing-user",
        avatarFilename: "avatar.jpg",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  test("Should delete old avatar when updating new one", async () => {
    // spy = espionar
    const deleteFile = jest.spyOn(fakeStorageProvider, "deleteFile");

    const user = await fakeUsersRepository.create({
      barber: false,
      name: "Davi Artur",
      email: "davi@gmail.com",
      password: "123456",
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: "avatar.jpg",
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: "avatar2.jpg",
    });

    expect(deleteFile).toHaveBeenCalledWith("avatar.jpg");
    expect(user.avatar).toBe("avatar2.jpg");
  });
});
