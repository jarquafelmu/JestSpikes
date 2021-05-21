//AWESOME
//
//1. read in fileB.txt Sam
//2. read in fileA.txt Aaron
//3. I'll write the loop in main

const fs = require("fs");

function checkLines(fileA, fileB) {
  for (let i = 0; i < fileA.length && i < fileB.length; i++) {
    if (fileA[i] !== fileB[i]) return false;
  }
  return true;
}

function main() {
  const fileA = fs.readFileSync("./fileA.txt", "utf8").split(/\r?\n/);
  const fileB = fs.readFileSync("./fileB.txt", "utf8").split(/\r?\n/);

  console.log(`The files are the same: ${checkLines(fileA, fileB)}`);
}

main();
