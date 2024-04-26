import getKnexInstance from "../src/db/knex";

async function seedDb() {
  const knex = getKnexInstance();
  await knex.seed.run();

  console.log("✅ Database seeded");
  process.exit();
}

seedDb();
