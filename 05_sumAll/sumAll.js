const sumAll = function (elementOne, elementTwo) {
  let sum = 0;
  if (elementOne > elementTwo) {
    [elementOne, elementTwo] = [elementTwo, elementOne];
  }
  if (elementOne < 0 || elementTwo < 0) return "ERROR";
  if (typeof elementOne !== "number" || typeof elementTwo !== "number") {
    return "ERROR";
  } else {
    for (let i = elementOne; i <= elementTwo; i++) sum += i;
  }

  return sum;
};
console.log(sumAll(1, [1, 2]));
// Do not edit below this line
module.exports = sumAll;
