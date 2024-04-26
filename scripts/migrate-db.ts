import getKnexInstance from "../src/db/knex";

async function migrateDb() {
  const knex = getKnexInstance();
  await knex.migrate.up();

  console.log("✅ Database migrated");
  process.exit();
}

migrateDb();
