import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";

import * as employeesModel from "../models/employees-model";

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
      const employeeBody = request.body as postEmployeeBodyType;
      const id = employeesModel.createEmployee(employeeBody);
      reply.code(201).send({ id });
    },
  };
}
