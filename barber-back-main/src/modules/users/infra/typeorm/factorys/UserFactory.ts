import UsersRepository from "../repositories/UsersRepository";
import CreateUsersService from "../../../services/CreateUsersService";
import AuthenticateUserService from "../../../services/AuthenticateUserService";
import BCryptHashProvider from "../../../../../modules/users/providers/HashProvider/implementations/BCryptHashProvider";
import UsersController from "../../http/controllers/UsersController";
import SessionController from "../../http/controllers/SessionsController";
import ResetPasswordService from "../../../../../modules/users/services/ResetPasswordService";
import UsersTokenRepository from "../repositories/UsersTokenRepository";
import SendForgotPasswordEmailService from "../../../../../modules/users/services/SendForgotPasswordEmailService";
import EtherealMailProvider from "../../../../../shared/providers/MailProvider/implementations/EtherealMailProvider";
import HandlebarsMailTemplateProvider from "../../../../../shared/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider";
import ResetPasswordController from "../../http/controllers/ResetPasswordController";
import ForgotPasswordController from "../../http/controllers/ForgotPasswordController";
import ShowProfileService from "../../../../../modules/users/services/ShowProfileService";
import ProfileController from "../../http/controllers/ProfileController";
import UpdateProfileService from "../../../../../modules/users/services/UpdateProfileService";
import UploadUserAvatarService from "../../../../../modules/users/services/UploadUserAvatarService";
import DiskStorageProvider from "../../../.././../shared/providers/StorageProvider/implementations/DiskStorageProvider";
import UserAvatarController from "../../http/controllers/UserAvatarController";

export const UserFactory = () => {
  const hashProvider = new BCryptHashProvider();
  const usersRepository = new UsersRepository();
  const createUsersService = new CreateUsersService(
    usersRepository,
    hashProvider
  );
  const userController = new UsersController(createUsersService);
  const sessionService = new AuthenticateUserService(
    usersRepository,
    hashProvider
  );
  const sessionController = new SessionController(sessionService);
  const usersTokenRepository = new UsersTokenRepository();
  const resetPasswordService = new ResetPasswordService(
    usersRepository,
    usersTokenRepository,
    hashProvider
  );
  const resetPasswordController = new ResetPasswordController(
    resetPasswordService
  );
  const templateProvider = new HandlebarsMailTemplateProvider();
  const mailProvider = new EtherealMailProvider(templateProvider);
  const sendForgotPasswordEmailService = new SendForgotPasswordEmailService(
    usersRepository,
    mailProvider,
    usersTokenRepository
  );
  const forgotPasswordController = new ForgotPasswordController(
    sendForgotPasswordEmailService
  );
  const showProfileService = new ShowProfileService(usersRepository);
  const updateProfileService = new UpdateProfileService(
    usersRepository,
    hashProvider
  );
  const profileController = new ProfileController(
    showProfileService,
    updateProfileService
  );
  const storageProvider = new DiskStorageProvider();
  const uploadUserAvatar = new UploadUserAvatarService(
    usersRepository,
    storageProvider
  );
  const userAvatarController = new UserAvatarController(uploadUserAvatar);
  return {
    userController,
    sessionController,
    resetPasswordController,
    forgotPasswordController,
    profileController,
    userAvatarController,
  };
};
