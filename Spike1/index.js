//  compare file buffers
const fs = require("fs");

function normalize(str) {
  // str = str.replace(/\s+$/, ""); // removes extra newline at end of file
  str = str.replace(/\r?\n|\r/g, "\n"); // normalizes carriage returns to only be newlines
  return str;
}

function main() {
  const args = process.argv.slice(2);
  if (!args || args.length != 2)
    throw Error("expected two files for comparison");

  let fileA = fs.readFileSync(args[0]).toString();
  let fileB = fs.readFileSync(args[1]).toString();
  fileA = normalize(fileA);
  fileB = normalize(fileB);

  // uses buffer equals for comparison
  let result = fileA == fileB;
  // let result = fileA,equals(fileB); // buffer compare
  console.log(`Are files the same? ${result ? "Yes" : "No"}`);
}

try {
  main();
} catch (e) {
  console.error(`${e}`);
}
