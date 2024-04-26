import { FastifyInstance, RouteOptions } from "fastify";
import * as tribesModel from "../models/tribes-model";

export default function getTribes(fastify: FastifyInstance): RouteOptions {
  return {
    method: "GET",
    url: "/api/tribes",
    handler: async function (request, reply) {
      const tribes = await tribesModel.getTribes(fastify);
      reply.send(tribes);
    },
  };
}
