import { AxiosResponse } from "axios";
import { DefaultApiFactory } from "../clients/stable-diffusion-api-client";

const defaultApiFactory = DefaultApiFactory(
  undefined,
  "http://localhost:7860",
  undefined
);

describe("txt2image stable-diffusion-api tests", () => {
  it("should return available models", async () => {
    const res = await defaultApiFactory.text2imgapiSdapiV1Txt2imgPost({
        prompt: `
        Runner mid-stride, exuding energy and speed, a simplistic childlike sketch capturing the essence of running. Main character in center, occupying 70% of image. Black and white, only black strokes, flat, no colors, white background, cute, happy, easy to crop <lora:child-drawing:1>
        `,
        negative_prompt: `
        Worst quality, low quality, normal quality, lowres, ugly, morbid, mutilated, tanny, blurry, photography, cropped, color, shadows, borders, filled, path filling, background, open lines, bad art, abstract, text, words, letters, realistic, art, 3d, shadow, perspective, 3-dimensional.
        `,
        steps: 20,
        width: 512,
        height: 512,
        cfg_scale: 7,
      });
    expect(res.status).toBe(200);
    expect(res.data.images).toHaveLength(1);
  }, 10000);
});
