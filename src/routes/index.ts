import { FastifyInstance } from "fastify";
import getEmployees from "./get-employees";
import getEmployeeById from "./get-employees-id";
import postEmployees from "./post-employees";
import deleteEmployeeById from "./delete-employees-id";
import getTribes from "./get-tribes";
import getTribeById from "./get-tribes-id";
import getReportEmployeesTribe from "./get-report";
import deleteCache from "./delete-cache";

export default async function routes(fastify: FastifyInstance) {
  fastify.route(getEmployees(fastify));
  fastify.route(getEmployeeById(fastify));
  fastify.route(postEmployees(fastify));
  fastify.route(deleteEmployeeById(fastify));
  fastify.route(getTribes(fastify));
  fastify.route(getTribeById(fastify));
  fastify.route(getReportEmployeesTribe(fastify));
  fastify.route(deleteCache(fastify));
}
