import { describe, expect, test, vi } from "vitest";
import { basicService } from "./basicService";

describe("Basic Service Tests", () => {
  async function act(): Promise<string> {
    return await basicService();
  }

  vi.mock("./longFunction", () => {
    return {
      longFunction: vi.fn(() => "Hello world!"),
    };
  });

  test("Returns as expected", async () => {
    const result = await act();

    expect(result).toBe("Hello world!");
  });
});
