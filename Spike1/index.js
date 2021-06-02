//  compare file buffers
const fs = require("fs");

function main() {
  const args = process.argv.slice(2);
  if (!args || args.length < 2) Error("expected two files for comparison");

  console.log(args);

  let fileA = fs.readFileSync(args[0]);
  let fileB = fs.readFileSync(args[1]);

  // uses buffer equals for comparison
  let result = fileA.equals(fileB);
  console.log(`FileA equals FileB? ${result}`);
}

try {
  main();
} catch (e) {
  console.error(`error: ${e}`);
}

// "args": [
//   "src.txt",
//   "dst.txt"
// ]
