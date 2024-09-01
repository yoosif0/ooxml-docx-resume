import { describe, test, expect } from "vitest";
import { handleCategory } from "./skills.mjs";

describe("Skills", () => {
  const jsonFixture = {
    "programming languages": { golang: null, python: null },
    cloud: {
      compute: { "AWS EC2": null, "GCP compute": null },
      PaaS: { Heroku: null, Vercel: null },
    },
  };
  test.each([
    ["programming languages", "golang, python"],
    ["cloud", "compute (AWS EC2, GCP compute), PaaS (Heroku, Vercel)"],
  ])("parses well", (input, expected) => {
    expect(handleCategory(jsonFixture[input])).toBe(expected);
  });
});
