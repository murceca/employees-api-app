import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";
import * as employeesModel from "../models/employees-model";
import { postByIdType } from "../schemas/employee-schema";

export default function getEmployeeById(
  fastify: FastifyInstance
): RouteOptions {
  return {
    method: "GET",
    url: "/api/employees/:id",
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const { id } = request.params as postByIdType;
      const employee = employeesModel.getEmployee(id);
      if (employee) {
        reply.send(employee);
      } else {
        reply.code(404);
      }
    },
  };
}
