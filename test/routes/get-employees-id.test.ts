import { destroyTestDb, generateTestDb } from "../db-test";
import getTestFastify from "../app-test";

const app = getTestFastify();

describe("GET /api/employees/:id", () => {
  beforeEach(async () => {
    await generateTestDb(app);
  });

  afterEach(async () => {
    await destroyTestDb(app);
  });

  it("should filter by id", async () => {
    const res = await app.inject({
      url: "/api/employees/1",
      method: "GET",
    });

    const response = res.json();
    expect(response).toEqual([
      {
        id: 1,
        name: "Cooper",
        title: "Software Engineer",
        tribe_id: 1,
      },
    ]);
  });

  it("should return error message for wrong id", async () => {
    const res = await app.inject({
      url: "/api/employees/42",
      method: "GET",
    });

    const response = res.json();
    expect(response).toEqual({ message: "No employee found with this id" });
  });
});
