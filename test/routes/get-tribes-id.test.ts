import { destroyTestDb, generateTestDb } from "../db-test";
import getTestFastify from "../app-test";

const app = getTestFastify();

describe("GET /api/tribes/:id", () => {
  beforeEach(async () => {
    await generateTestDb(app);
  });

  afterEach(async () => {
    await destroyTestDb(app);
  });

  it("should filter by id", async () => {
    const res = await app.inject({
      url: "/api/tribes/1",
      method: "GET",
    });

    const response = res.json();
    expect(response).toEqual({
      id: 1,
      name: "Internstellar",
      department: "Other Engineering",
    });
  });

  it("should return error with message", async () => {
    const res = await app.inject({
      url: "/api/tribes/5",
      method: "GET",
    });

    const response = res.json();
    expect(response).toEqual({ message: "No tribe found" });
  });
});
