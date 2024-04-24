import { Static, Type } from "@sinclair/typebox";

export const postEmployeeBodySchema = Type.Object({
  name: Type.String(),
  title: Type.String(),
  tribe: Type.Object({
    id: Type.Number(),
    name: Type.String(),
    department: Type.String(),
  }),
});

export type postEmployeeBodyType = Static<typeof postEmployeeBodySchema>;

export const postByIdSchema = Type.Object({
  id: Type.Number({ minimum: 0 }),
});
export type postByIdType = Static<typeof postByIdSchema>;
