import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from "fastify";
import * as tribesModel from "../models/tribes-model";
import {
  paramsTribeIdType,
  paramsTribeIdTypeSchema,
} from "../schemas/tribe-schema";

export default function getTribeById(fastify: FastifyInstance): RouteOptions {
  return {
    method: "GET",
    url: "/api/tribes/:id",
    schema: {
      params: paramsTribeIdTypeSchema,
    },
    handler: async function (request: FastifyRequest, reply: FastifyReply) {
      const params = request.params as paramsTribeIdType;
      const tribe = await tribesModel.getTribe(fastify, params.id);
      if (!tribe) {
        reply.code(404).send({ message: "No tribe found" });
      } else {
        reply.send(tribe);
      }
    },
  };
}
