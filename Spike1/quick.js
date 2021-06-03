// let size = require("buffer").constants.MAX_LENGTH + 1;
// console.log(size);

const fs = require("fs");

let filename = "long_file.txt";
if (process.argv.length > 2) filename = process.argv[2];
function main() {
  var fileString = "";
  for (let i = 0; i < 20000; i++) {
    fileString += `${i} \n`;
  }

  fs.writeFileSync(filename, fileString);
}

main();
