import fs from "fs";
import {
  parseGameRecord,
  isPossibleGame,
  getFewestCubesForGame,
} from "./two.js";

const lines = fs.readFileSync("input.txt", "utf8").split("\n");

let sum = 0;
for (const line of lines) {
  const record = parseGameRecord(line);
  if (record) {
    const fewest = getFewestCubesForGame(record);
    const power = fewest.red * fewest.green * fewest.blue;
    sum += power;
  }
}
console.log(`Value: ${sum}`);
