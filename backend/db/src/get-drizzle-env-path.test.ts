import { describe, expect, it } from "bun:test";
import { dirname, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { getDrizzleEnvPath } from "./get-drizzle-env-path";

describe("getDrizzleEnvPath", () => {
  it("returns an absolute path to the backend server env file", () => {
    const expectedPath = resolve(
      dirname(fileURLToPath(import.meta.url)),
      "../../server/.env",
    );

    const envPath = getDrizzleEnvPath();

    expect(isAbsolute(envPath)).toBeTrue();
    expect(envPath).toBe(expectedPath);
  });
});
