const reverseString = function (str) {
  let stringArr = [...str];
  let newArr = [];
  for (let i = stringArr.length - 1; i >= 0; i--) {
    newArr.push(stringArr[i]);
  }
  return (str = newArr.join(""));
};

// Do not edit below this line
module.exports = reverseString;
