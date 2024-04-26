import { Static, Type } from "@sinclair/typebox";

export const tribeBodySchema = Type.Object({
  name: Type.String(),
  department: Type.String(),
});

export type tribeBodyType = Static<typeof tribeBodySchema>;

export const paramsTribeIdTypeSchema = Type.Object({
  id: Type.Integer(),
});
export type paramsTribeIdType = Static<typeof paramsTribeIdTypeSchema>;
