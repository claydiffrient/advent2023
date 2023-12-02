import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { getNumberFromLine } from "./one.js";

const argv = yargs(hideBin(process.argv))
  .option("file", {
    alias: "f",
    description: "File to read",
    type: "string",
    demandOption: true,
  })
  .parseSync();

const lines = fs.readFileSync(argv.file, "utf8").split("\n");

let sum = 0;
for (const line of lines) {
  sum += getNumberFromLine(line);
}
console.log(`Value: ${sum}`);
