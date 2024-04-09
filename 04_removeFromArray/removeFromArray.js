const removeFromArray = function (arrayOfElements, ...elements) {
  let number;
  for (let j = 0; j < arguments.length - 1; j++) {
    number = elements[j];

    console.log(typeof number);
    for (let i = 0; i < arrayOfElements.length; i++) {
      if (typeof number !== "number") continue;
      if (arrayOfElements[i] % number === 0) {
        arrayOfElements.splice(i, 1);
      }
      if (arrayOfElements[i] === number) {
        arrayOfElements.splice(i, 1);
      }
    }
  }
  return arrayOfElements;
};

console.log(removeFromArray([1, 2, 3], "1", 3));
// Do not edit below this line
module.exports = removeFromArray;
