import knex from "knex";
import knexConfig from "../../knex-config";

type envType = "development" | "production" | "test";
const env = (process.env.environment as envType) ?? "development";

export default function getKnexInstance() {
  console.log(`knex environment: ${env}`);
  const config = knexConfig[env];
  const knexInstance = knex(config);

  return knexInstance;
}
