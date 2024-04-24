import { FastifyInstance } from "fastify";
import getEmployees from "./get-employees";

export default async function routes(fastify: FastifyInstance) {
  fastify.route(getEmployees(fastify));
}
