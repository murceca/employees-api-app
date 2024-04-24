import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";
import * as employeesModel from "../models/employees-model";

export default function deleteEmployeeById(
  fastify: FastifyInstance
): RouteOptions {
  return {
    method: "DELETE",
    url: "/api/employees/:id",
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const { id } = request.params as { id: number };
      const employees = employeesModel.deleteEmployeeById(id);
      reply.send(200);
    },
  };
}
