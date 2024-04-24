import { FastifyInstance } from "fastify";
import getEmployees from "./get-employees";
import getEmployeeById from "./get-employees-id";
import postEmployees from "./post-employees";
import deleteEmployeeById from "./delete-employees-id";

export default async function routes(fastify: FastifyInstance) {
  fastify.route(getEmployees(fastify));
  fastify.route(getEmployeeById(fastify));
  fastify.route(postEmployees(fastify));
  fastify.route(deleteEmployeeById(fastify));
}
