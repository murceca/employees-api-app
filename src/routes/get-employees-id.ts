import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";
import * as employeesModel from "../models/employees-model";

export default function getEmployeesById(
  fastify: FastifyInstance
): RouteOptions {
  return {
    method: "GET",
    url: "/api/employees/:id",
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const employees = employeesModel.getEmployees();
      // const { id } = request.params

      reply.send(employees);
    },
  };
}
