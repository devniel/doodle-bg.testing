import {
  DefaultApiFactory,
} from "../clients/stable-diffusion-api-client";

const defaultApiFactory = DefaultApiFactory(
  undefined,
  "http://localhost:7860",
  undefined
);

describe("Ping stable-diffusion-api via basic API calls", () => {
  it("should return available models", async () => {
    const res = await defaultApiFactory.apiInfoInfoGet();
    expect(res.status).toBe(200);
  });
});
