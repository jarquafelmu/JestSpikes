// function filterByTerm(inputArr, searchTerm) {
//   return inputArr.filter(function (arrayElement) {
//     return arrayElement.url.match(searchTerm);
//   });
// }
function filterByTerm(inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, "i");

  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(regex);
  });
}

module.exports = filterByTerm;
