import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import { Knex } from "knex";
import getKnexInstance from "../db/knex";

async function knexPlugin(fastify: FastifyInstance) {
  const knexInstance = getKnexInstance();
  fastify.decorate("db", knexInstance);
}

export default fp(knexPlugin, {
  name: "db",
});

declare module "fastify" {
  interface FastifyInstance {
    db: Knex;
  }
}
