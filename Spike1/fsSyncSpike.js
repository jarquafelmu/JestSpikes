const fs = require("fs")

const paddedLength = 6
const padCharacter = "0"

/**
 * Adds a padded row number and a space to the beginning of a line of text.
 * @param {String} text the line of text
 * @param {Number} lineNum the row number of the line of text
 * @returns the result
 */
function addPaddedRowNumbers(text, lineNum) {
    return `${lineNum.toString().padStart(paddedLength, padCharacter)} ${text}`
}

/**
 * Loops through an array of strings and pads element base-1 index
 * @param {Array<String>} sourceFileArray an array of strings, each representing a row in the source file
 * @returns the modified array
 */
function loopThroughRows(sourceFileArray) {
    var modifiedArray = Array(sourceFileArray.length)
    for (let i = 0; i < sourceFileArray.length; i++) {
        modifiedArray[i] = addPaddedRowNumbers(sourceFileArray[i], i + 1)
    }
    return modifiedArray
}

/**
 * Processes the file
 * @param {String} sourceFile the source file 
 * @returns the processed file
 */
function processFile(sourceFile) {
    var sourceFileArray = sourceFile.split(/\r?\n/)
    var paddedFileArray = loopThroughRows(sourceFileArray)
    paddedFileArray.push("EOF")
    return paddedFileArray.join("\n")
}

/**
 * Reads from source file, adds padded row numbers, and writes the results to a
 * destination file specified by command line arguments.
 */
function main() {
    const sourceFile = fs.readFileSync(process.argv[2], "utf8")
    var paddedFile = processFile(sourceFile)

    fs.writeFileSync(process.argv[3], paddedFile)
}

main()