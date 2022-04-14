import { spec } from "pactum";
import "../config";
import "../config/base.config";
import { mongoFunction } from "@utils/mongo";

describe("first test", () => {
  it("should pass", async () => {
    mongoFunction();
    return spec("check status", { endpoint: "/status/418", status: 418 });
  });
});
