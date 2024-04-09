const removeFromArray = function (arrayOfElemnt, ...element) {
  let arr = arrayOfElemnt.filter((item) => {
    return !element.includes(item);
  });
  arr = arr.filter((item) => {
    return item % element !== 0;
  });

  return arr;
};

console.log(removeFromArray([1, 2, 3, 2, "1"], 1, 2, "1"));

// Do not edit below this line
module.exports = removeFromArray;
