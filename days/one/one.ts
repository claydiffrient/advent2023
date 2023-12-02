const map = {
  one: "one1one",
  two: "two2two",
  three: "three3three",
  four: "four4four",
  five: "five5five",
  six: "six6six",
  seven: "seven7seven",
  eight: "eight8eight",
  nine: "nine9nine",
};

export function getNumberFromLine(
  line: string,
  { words = false } = {}
): number {
  let input = line;
  if (words) {
    Object.keys(map).forEach((key) => {
      input = input.replaceAll(key, map[key]);
    });
  }

  const matches = input.match(/\d/g);
  if (matches) {
    let firstVal = matches[0];
    let secondVal = matches[matches.length - 1];
    const val = `${firstVal}${secondVal}`;
    if (val) {
      return Number.parseInt(val, 10);
    }
  }
  throw new Error("Invalid line: " + line);
}
