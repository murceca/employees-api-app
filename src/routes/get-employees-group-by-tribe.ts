import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";
import * as employeesModel from "../models/employees-model";
import { searchQueryType } from "../schemas/employee-schema";

export default function getEmployees(fastify: FastifyInstance): RouteOptions {
  return {
    method: "GET",
    url: "/api/employees",
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const searchQuery = request.query as searchQueryType;
      const employees = await employeesModel.getEmployees(fastify, searchQuery);
      reply.send(employees);
    },
  };
}
