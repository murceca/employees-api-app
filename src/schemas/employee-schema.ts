import { Static, Type } from "@sinclair/typebox";

export const postEmployeeBodySchema = Type.Object({
  name: Type.String(),
  title: Type.String(),
  tribe_id: Type.Integer(),
});

export const searchQuerySchema = Type.Object({
  name: Type.Optional(Type.String()),
  title: Type.Optional(Type.String()),
  tribe: Type.Optional(Type.String()),
});

export type postEmployeeBodyType = Static<typeof postEmployeeBodySchema>;

export const paramsIdTypeSchema = Type.Object({
  id: Type.Integer(),
});
export type paramsIdType = Static<typeof paramsIdTypeSchema>;
export type searchQueryType = Static<typeof searchQuerySchema>;
