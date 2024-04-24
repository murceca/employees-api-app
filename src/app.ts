import Fastify from "fastify";
import routes from "./routes";

const fastify = Fastify();

fastify.register(routes);

fastify
  .listen({ port: 3001, host: "127.0.0.1" })
  .then(() => {
    console.log("Working...");
  })
  .catch((error) => {
    console.log(error);
    console.log("Error...");
  });
