import Fastify from "fastify";
import knexPlugin from "./plugins/knex-plugin";
import routes from "./routes";
import redisPlugin from "./plugins/redis-plugin";

const fastify = Fastify();

fastify.register(routes);

fastify.register(knexPlugin);
fastify.register(redisPlugin);

fastify
  .listen({ port: 3000, host: "0.0.0.0" })
  .then(() => {
    console.log("Working...");
  })
  .catch((error) => {
    console.log(error);
    console.log("Error...");
  });
