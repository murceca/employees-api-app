import { FastifyInstance, RouteOptions } from "fastify";
import * as employeesModel from "../models/employees-model";
import { paramsIdTypeSchema, paramsIdType } from "../schemas/employee-schema";

export default function getEmployeeById(
  fastify: FastifyInstance
): RouteOptions {
  return {
    method: "GET",
    url: "/api/employees/:id",
    schema: {
      params: paramsIdTypeSchema,
    },
    handler: async function (request, reply) {
      const params = request.params as paramsIdType;
      const employee = await employeesModel.getEmployee(fastify, params.id);
      if (!employee || employee.length === 0) {
        reply.code(404).send({ message: "No employee found with this id" });
      } else {
        reply.send(employee);
      }
    },
  };
}
