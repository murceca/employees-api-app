import knex from "knex";
import knexConfig from "../knex-config";

type envType = "development" | "production";
const env = (process.env.environment as envType) ?? "development";

async function createDb() {
  const config = knexConfig[env];
  const dbName = config.connection.database;

  // @ts-ignore
  config.connection.database = undefined;

  const knexInstance = knex(config);
  await knexInstance.raw("CREATE DATABASE employees");

  console.log("✅ Database created");
  process.exit();
}

createDb();
