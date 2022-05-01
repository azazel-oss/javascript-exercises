const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  }
  let start = num1 < num2 ? num1 : num2;
  let end = num2 < num1 ? num1 : num2;
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
