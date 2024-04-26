import { FastifyInstance } from "fastify";

const TABLE_NAME = "tribes";

export interface Tribe {
  id: number;
  name: string;
  department: string;
}

export async function getTribes(fastify: FastifyInstance): Promise<Tribe[]> {
  return await fastify.db.from(TABLE_NAME).select();
}

export async function getTribe(
  fastify: FastifyInstance,
  id: number
): Promise<Tribe | null> {
  const result: Tribe[] = await fastify.db
    .from(TABLE_NAME)
    .where({ id })
    .select();

  if (result.length === 0) return null;

  return result[0];
}
