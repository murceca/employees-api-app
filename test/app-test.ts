import Fastify from "fastify";
import knexPlugin from "../src/plugins/knex-plugin";
import routes from "../src/routes";
import redisPlugin from "../src/plugins/redis-plugin";

jest.mock("redis", () => ({
  createClient: jest.fn().mockReturnValue({
    connect: jest.fn(),
    disconnect: jest.fn(),
    get: jest.fn().mockResolvedValue(undefined),
    set: jest.fn(),
    del: jest.fn(),
  }),
}));

export default function () {
  const fastify = Fastify();

  beforeAll(async () => {
    fastify.register(routes);

    fastify.register(knexPlugin);
    fastify.register(redisPlugin);

    await fastify.ready();
  });

  afterAll(() => fastify.close());

  return fastify;
}
