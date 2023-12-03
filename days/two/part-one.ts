import fs from "fs";
import { parseGameRecord, isPossibleGame } from "./two.js";

const lines = fs.readFileSync("input.txt", "utf8").split("\n");

let sum = 0;
for (const line of lines) {
  const record = parseGameRecord(line);
  if (record) {
    if (isPossibleGame(record, { red: 12, green: 13, blue: 14 })) {
      sum += record.id;
    }
  }
}
console.log(`Value: ${sum}`);
