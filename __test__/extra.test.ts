import { spec } from "pactum";
import "../config";
import "../config/extra.config";
import { supportFunction } from "@utils/support";

describe("first test", () => {
  it("should pass", async () => {
    supportFunction();
    return spec("check status", { endpoint: "/status/418", status: 404 });
  });
});
