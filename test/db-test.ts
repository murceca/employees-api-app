import { FastifyInstance } from "fastify";

const EMPLOYEES_TABLE = "employees";
const TRIBES_TABLE = "tribes";

export async function generateTestDb(fastify: FastifyInstance) {
  await createDb(fastify);
  await generateData(fastify);
}

export async function destroyTestDb(fastify: FastifyInstance) {
  await fastify.db.schema.dropTable(EMPLOYEES_TABLE);
  await fastify.db.schema.dropTable(TRIBES_TABLE);
}

export async function createDb(fastify: FastifyInstance) {
  await fastify.db.schema.createTable(TRIBES_TABLE, (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("department").notNullable();
  });

  await fastify.db.schema.createTable(EMPLOYEES_TABLE, (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("title").notNullable();
    table
      .integer("tribe_id")
      .index()
      .unsigned()
      .references("id")
      .inTable("tribes");
  });
}

export async function generateData(fastify: FastifyInstance) {
  const tribesSeedData = [
    { name: "Internstellar", department: "Other Engineering" },
    { name: "Billing", department: "Product Platform" },
    { name: "Gears", department: "Product Platform" },
  ];

  const employeesSeedData = [
    { name: "Cooper", title: "Software Engineer", tribe_id: 1 },
    { name: "Murph", title: "Software Engineer", tribe_id: 1 },
    { name: "TARS", title: "Designer", tribe_id: 1 },
    { name: "The Bride", title: "Software Engineer", tribe_id: 2 },
    { name: "Pai Mei", title: "EM", tribe_id: 2 },
    { name: "Bill", title: "PM", tribe_id: 2 },
    { name: "Hattori Hanzo", title: "DevOps Engineer", tribe_id: 2 },
    { name: "Jeremy Clarkson", title: "Software Engineer", tribe_id: 3 },
    { name: "Richard Hammond", title: "Designer", tribe_id: 3 },
    { name: "James May", title: "DevOps Engineer", tribe_id: 3 },
  ];

  await fastify.db.from(TRIBES_TABLE).insert(tribesSeedData);
  await fastify.db.from(EMPLOYEES_TABLE).insert(employeesSeedData);
}
