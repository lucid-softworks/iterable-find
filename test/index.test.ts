import { describe, expect, it, vi } from "vitest";

import { find } from "../src/index.js";

describe("find", () => {
  it("returns the first match with its index and short-circuits", () => {
    const predicate = vi.fn<(value: string, index: number) => boolean>(
      (value: string, index: number) => value === "b" && index === 1,
    );
    expect(find(["a", "b", "b"], predicate)).toBe("b");
    expect(predicate).toHaveBeenCalledTimes(2);
  });
  it("returns undefined for misses", () => {
    expect(find([], () => true)).toBeUndefined();
    expect(find([1], () => false)).toBeUndefined();
  });
});
