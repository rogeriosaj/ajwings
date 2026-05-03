import { describe, expect, it } from "bun:test";

import { getPrivateData } from "./get-private-data";

describe("getPrivateData", () => {
  it("returns the private message and provided user", () => {
    const user = {
      id: "user_123",
      email: "user@example.com",
      name: "Test User",
    };

    const result = getPrivateData({ user });

    expect(result.user.name).toBe("Test User");

    expect(result).toEqual({
      message: "This is private",
      user,
    });
  });
});
