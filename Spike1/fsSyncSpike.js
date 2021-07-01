const fs = require("fs");

const paddedLength = 6;
const padCharacter = "0";

/**
 * Adds a padded row number and a space to the beginning of a line of text.
 * @param {String} text the line of text
 * @param {Number} lineNum the row number of the line of text`
 * @returns the result
 */
function addPaddedRowNumbers(text, lineNum) {
  return `${lineNum.toString().padStart(paddedLength, padCharacter)} ${text}`;
}

/**
 * Adds the row number and space at the start of every row
 * @param {String} sourceText the text to pad
 * @returns the padded text
 */
function padText(sourceText) {
  const sourceStrings = sourceText.split(/\r?\n/);
  const paddedStrings = sourceStrings.map((row, i) =>
    addPaddedRowNumbers(row, i + 1)
  );
  paddedStrings.push("EOF");
  return paddedStrings.join("\n");
}

/**
 * Reads from source file, adds padded row numbers, and writes the results to a
 * destination file specified by command line arguments.
 */
function main() {
  const args = process.argv.splice(2);
  [sourceFilePath, destinationFilePath] = args;

  if (!sourceFilePath)
    throw Error("Missing source file path command line argument");
  if (!destinationFilePath)
    throw Error("Missing destination file path command line argument");

  const sourceText = fs.readFileSync(sourceFilePath, "utf8");
  fs.writeFileSync(destinationFilePath, padText(sourceText));
}

main();
