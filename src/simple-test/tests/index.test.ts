import { describe, it } from "@jest/globals";
import { sum, multiply } from "../index";

describe("Testing sum function", () => {
  it("Should return sum correctly", () => {
    const finalAnswer = sum(1, 3);
    expect(finalAnswer).toBe(4);
  });

  it("Should return sum correctly", () => {
    const finalAnswer = sum(2, 4);
    expect(finalAnswer).toBe(6);
  });
});

describe("Testing multiply function", () => {
  it("Should return multiply correctly", () => {
    const finalAnswer = multiply(1, 3);
    expect(finalAnswer).toBe(3);
  });

  it("Should return multiply correctly", () => {
    const finalAnswer = multiply(2, 4);
    expect(finalAnswer).toBe(8);
  });
});
