import { DataSource } from "typeorm";

import Appointment from "../../../modules/appointments/infra/typeorm/entities/Appointment";
import User from "../../../modules/users/infra/typeorm/entities/User";
import UserToken from "../../../modules/users/infra/typeorm/entities/UserToken";

import { CreateUsers1696019680697 } from "./migrations/1695019680691-CreateUsers";
import { CreateAppointments1695957180602 } from "./migrations/1696009232692-CreateAppointments";
import { AddAvatarFieldToUsers1696039971100 } from "./migrations/1696039971100-AddAvatarFieldToUsers";
import { CreateUserTokens1698763393447 } from "./migrations/1698763393447-CreateUserTokens";
import { AddUserIdAppointments1699291150737 } from "./migrations/1699291150737-AddUserIdAppointments";
import { FkProvider1716779003858 } from "./migrations/1716779003858-fk-provider";
import { FkUserId1716779083986 } from "./migrations/1716779083986-fk-userId";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "docker",
  database: "database",
  synchronize: false,
  logging: false,
  entities: [Appointment, User, UserToken],
  migrations: [
    CreateUsers1696019680697,
    CreateAppointments1695957180602,
    AddAvatarFieldToUsers1696039971100,
    CreateUserTokens1698763393447,
    AddUserIdAppointments1699291150737,
    FkProvider1716779003858,
    FkUserId1716779083986,
  ],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) => {
    console.error("Error during Data Source initialization", error);
  });
