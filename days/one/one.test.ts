import { describe, it, expect, test } from "@jest/globals";
import { getNumberFromLine } from "./one";
describe("Part One", () => {
  describe("getNumberFromLine", () => {
    it("gets a two digit number from a line", () => {
      expect(getNumberFromLine("1abc2")).toBe(12);
    });
    it("handles leading and trailing characters", () => {
      expect(getNumberFromLine("pqr3stu8vwx")).toBe(38);
    });
    it("handles numbers in the middle", () => {
      expect(getNumberFromLine("a1b2c3d4e5f")).toBe(15);
    });
    it("handles single digit numbers", () => {
      expect(getNumberFromLine("treb7uchet")).toBe(77);
    });
  });
});

describe("Part Two", () => {
  describe("getNumberFromLine(words: true)", () => {
    it("gets a number from a line with words", () => {
      expect(getNumberFromLine("two1nine", { words: true })).toBe(29);
    });
    it("gets a number from a line with middle words", () => {
      expect(getNumberFromLine("eightwothree", { words: true })).toBe(83);
    });
    it("gets a number from a line with leading and tailing letters", () => {
      expect(getNumberFromLine("abcone2threexyz", { words: true })).toBe(13);
    });
    it("gets a number from a line with mixed middle words", () => {
      expect(getNumberFromLine("xtwone3four", { words: true })).toBe(24);
    });
    it("gets a number from a line with leading and trailing numbers", () => {
      expect(getNumberFromLine("4nineeightseven2", { words: true })).toBe(42);
    });
    it("gets a number with words and numbers", () => {
      expect(getNumberFromLine("zoneight234", { words: true })).toBe(14);
    });
    it("gets a number with words and numbers", () => {
      expect(getNumberFromLine("7pqrstsixteen", { words: true })).toBe(76);
    });
    it("handles numbers that overlap", () => {
      expect(
        getNumberFromLine("6czklmzsmxgmktzxmxsixmnlfxonetwonesgj", {
          words: true,
        })
      ).toBe(61);
    });
  });
});
