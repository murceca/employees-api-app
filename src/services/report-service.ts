import { FastifyInstance } from "fastify";
import * as employeesModel from "../models/employees-model";
import * as tribesModel from "../models/tribes-model";

export const EMPLOYEES_REPORT_CACHE_KEY = "employees_report";

export async function getReport(fastify: FastifyInstance) {
  const cache = await fastify.drawer.get(EMPLOYEES_REPORT_CACHE_KEY);

  if (cache) {
    return JSON.parse(cache);
  }

  const employees = await employeesModel.getEmployees(fastify, {});
  const tribes = await tribesModel.getTribes(fastify);

  const report = tribes.map((tribe) => {
    const employeesList = employees.filter((x) => x.tribe_id === tribe.id);
    return {
      ...tribe,
      employees: employeesList,
    };
  });

  await fastify.drawer.set(EMPLOYEES_REPORT_CACHE_KEY, JSON.stringify(report), {
    EX: 20,
  });

  return report;
}
