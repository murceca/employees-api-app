import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";
import * as employeesModel from "../models/employees-model";

export default function getEmployees(fastify: FastifyInstance): RouteOptions {
  return {
    method: "GET",
    url: "/api/employees",
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const employees = await employeesModel.getEmployees(fastify);
      reply.send(employees);
    },
  };
}
