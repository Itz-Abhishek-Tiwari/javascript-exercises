const convertToCelsius = function (temp) {
  let result = ((temp - 32) / 9) * 5;
  return (result = Math.round(result * 10) / 10);
};

const convertToFahrenheit = function (temp) {
  let result = (temp * 9) / 5 + 32;
  return (result = Math.round(result * 10) / 10);
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
