const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  } else {
    let a = 0;
    let b = 1;
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum = a + b;
      b = a;
      a = sum;
    }
    return sum;
  }
};

console.log(fibonacci(-4));
// Do not edit below this line
module.exports = fibonacci;
