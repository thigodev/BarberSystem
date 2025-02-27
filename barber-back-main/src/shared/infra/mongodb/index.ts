import { DataSource } from "typeorm";

import Notification from "../../../modules/notifications/infra/typeorm/schemas/Notification";

export const AppDataSource = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "database",
  useUnifiedTopology: true,
  entities: [Notification],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source mongodb has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
