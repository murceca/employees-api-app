import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";
import * as employeesModel from "../models/employees-model";
import { paramsIdTypeSchema, paramsIdType } from "../schemas/employee-schema";
import { EMPLOYEES_REPORT_CACHE_KEY } from "../services/report-service";

export default function deleteEmployeeById(
  fastify: FastifyInstance
): RouteOptions {
  return {
    method: "DELETE",
    url: "/api/employees/:id",
    schema: {
      params: paramsIdTypeSchema,
    },
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const params = request.params as paramsIdType;
      const employees = await employeesModel.deleteEmployee(fastify, params.id);
      fastify.drawer.del(EMPLOYEES_REPORT_CACHE_KEY);
      reply.send(200);
    },
  };
}
