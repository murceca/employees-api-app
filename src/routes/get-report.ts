import { FastifyInstance, RouteOptions } from "fastify";
import * as reportService from "../services/report-service";

export default function (fastify: FastifyInstance): RouteOptions {
  return {
    method: "GET",
    url: "/api/employees/report",
    handler: async (request, reply) => {
      const report = await reportService.getReport(fastify);
      reply.code(200).send(report);
    },
  };
}
