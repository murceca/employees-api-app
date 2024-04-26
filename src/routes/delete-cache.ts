import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";
import { EMPLOYEES_REPORT_CACHE_KEY } from "../services/report-service";

export default function deleteCache(fastify: FastifyInstance): RouteOptions {
  return {
    method: "DELETE",
    url: "/api/cache",
    handler: async function (request, reply) {
      await fastify.drawer.del(EMPLOYEES_REPORT_CACHE_KEY);
      reply.send(201).send({ message: "Cache was deleted..." });
    },
  };
}
