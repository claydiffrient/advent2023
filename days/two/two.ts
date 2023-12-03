export interface GameRecord {
  id: number;
  sets: Draw[];
}

export interface Draw {
  red: number;
  green: number;
  blue: number;
}

const RED_REGEX = /(\d+) red/g;
const GREEN_REGEX = /(\d+) green/g;
const BLUE_REGEX = /(\d+) blue/g;

export function parseGameRecord(line: string) {
  const [firstPart, secondPart] = line.split(":");
  const match = firstPart.match(/Game (\d+)/)?.[1];
  if (match) {
    const id = Number.parseInt(match, 10);
    const retVal: GameRecord = {
      id,
      sets: [],
    };
    secondPart.split(";").forEach((set) => {
      const redMatch = set.match(RED_REGEX)?.[0];
      const greenMatch = set.match(GREEN_REGEX)?.[0];
      const blueMatch = set.match(BLUE_REGEX)?.[0];
      retVal.sets.push({
        red: Number.parseInt(redMatch ?? "0", 10),
        green: Number.parseInt(greenMatch ?? "0", 10),
        blue: Number.parseInt(blueMatch ?? "0", 10),
      });
    });
    return retVal;
  }
}

export function isPossibleGame(
  record: GameRecord,
  availableBalls: Draw
): boolean {
  return record.sets.every((set) => {
    return !(
      set.red > availableBalls.red ||
      set.green > availableBalls.green ||
      set.blue > availableBalls.blue
    );
  });
}

export function getFewestCubesForGame(record: GameRecord): Draw {
  const redVals: number[] = [];
  const greenVals: number[] = [];
  const blueVals: number[] = [];
  record.sets.forEach((set) => {
    redVals.push(set.red || 0);
    greenVals.push(set.green || 0);
    blueVals.push(set.blue || 0);
  });
  const maxRed = Math.max(...redVals);
  const maxGreen = Math.max(...greenVals);
  const maxBlue = Math.max(...blueVals);
  return { red: maxRed, green: maxGreen, blue: maxBlue };
}
