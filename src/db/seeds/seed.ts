import { Knex } from "knex";

export async function seed(knex: Knex) {
  const tribesSeedData = [
    { name: "Internstellar", department: "Engineering Excellence" },
    { name: "Fusion", department: "R&D Platform" },
    { name: "Gears", department: "R&D Platform" },
  ];
  const employeesSeedData = [
    { name: "Alo Aasmäe", title: "Junior Software Engineer", tribe_id: 3 },
    {
      name: "Natalie Zacharova",
      title: "Senior Software Engineer",
      tribe_id: 2,
    },
    { name: "Mykhailo Dorokhov", title: "Engineering L&D Lead", tribe_id: 1 },
  ];
  await knex("tribes").insert(tribesSeedData);
  await knex("employees").insert(employeesSeedData);
}
