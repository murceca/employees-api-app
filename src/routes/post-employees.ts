import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";

import * as employeesModel from "../models/employees-model";
import { EMPLOYEES_REPORT_CACHE_KEY } from "../services/report-service";

import {
  postEmployeeBodySchema,
  postEmployeeBodyType,
} from "../schemas/employee-schema";

export default function postEmployees(fastify: FastifyInstance): RouteOptions {
  return {
    method: "POST",
    url: "/api/employees",
    schema: {
      body: postEmployeeBodySchema,
    },
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const employee = request.body as postEmployeeBodyType;
      const id = await employeesModel.createEmployee(fastify, employee);
      fastify.drawer.del(EMPLOYEES_REPORT_CACHE_KEY);
      reply.code(201).send({ id });
    },
  };
}
