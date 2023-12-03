import {
  GameRecord,
  isPossibleGame,
  parseGameRecord,
  getFewestCubesForGame,
} from "./two";
import { describe, it, expect } from "@jest/globals";

describe("Part One", () => {
  describe("parseGameRecord", () => {
    it("creates the proper object", () => {
      const record = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
      expect(parseGameRecord(record)).toEqual<GameRecord>({
        id: 1,
        sets: [
          {
            blue: 3,
            red: 4,
            green: 0,
          },
          {
            red: 1,
            green: 2,
            blue: 6,
          },
          {
            green: 2,
            red: 0,
            blue: 0,
          },
        ],
      });
    });
  });
  describe("isPossibleGame", () => {
    it.each([
      [
        {
          id: 1,
          sets: [
            { blue: 3, red: 4 },
            { red: 1, green: 2, blue: 6 },
            { green: 2, red: 0, blue: 0 },
          ],
        },
        true,
      ],
      [
        {
          id: 2,
          sets: [
            { blue: 1, green: 2 },
            { green: 3, blue: 4, red: 1 },
            { green: 1, blue: 1 },
          ],
        },
        true,
      ],
      [
        {
          id: 3,
          sets: [
            { blue: 6, green: 8, red: 20 },
            { green: 13, blue: 5, red: 4 },
            { green: 5, red: 1 },
          ],
        },
        false,
      ],
      [
        {
          id: 4,
          sets: [
            { blue: 6, green: 1, red: 3 },
            { green: 3, blue: 0, red: 6 },
            { green: 3, blue: 15, red: 14 },
          ],
        },
        false,
      ],
      [
        {
          id: 5,
          sets: [
            { red: 6, blue: 1, green: 3 },
            { blue: 2, red: 1, green: 2 },
          ],
        },
        true,
      ],
    ])(
      `isPossibleGame(%p, {red: 12, green: 13, blue: 14})`,
      (record, expected) => {
        expect(isPossibleGame(record, { red: 12, green: 13, blue: 14 })).toBe(
          expected
        );
      }
    );
  });
});

describe("Part Two", () => {
  describe("getFewestCubesForGame", () => {
    it.each([
      [
        {
          id: 1,
          sets: [
            { blue: 3, red: 4 },
            { red: 1, green: 2, blue: 6 },
            { green: 2, red: 0, blue: 0 },
          ],
        },
        { red: 4, green: 2, blue: 6 },
      ],
      [
        {
          id: 2,
          sets: [
            { blue: 1, green: 2 },
            { green: 3, blue: 4, red: 1 },
            { green: 1, blue: 1 },
          ],
        },
        { red: 1, green: 3, blue: 4 },
      ],
      [
        {
          id: 3,
          sets: [
            { blue: 6, green: 8, red: 20 },
            { green: 13, blue: 5, red: 4 },
            { green: 5, red: 1 },
          ],
        },
        { red: 20, green: 13, blue: 6 },
      ],
      [
        {
          id: 4,
          sets: [
            { blue: 6, green: 1, red: 3 },
            { green: 3, blue: 0, red: 6 },
            { green: 3, blue: 15, red: 14 },
          ],
        },
        { red: 14, green: 3, blue: 15 },
      ],
      [
        {
          id: 5,
          sets: [
            { red: 6, blue: 1, green: 3 },
            { blue: 2, red: 1, green: 2 },
          ],
        },
        { red: 6, green: 3, blue: 2 },
      ],
    ])(`getFewestCubesForGame(%p) returns %p`, (record, expected) => {
      expect(getFewestCubesForGame(record)).toEqual(expected);
    });
  });
});
