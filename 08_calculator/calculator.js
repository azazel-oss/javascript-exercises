const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  let result = 0;
  if (!a) return result;
  for (let val of a) {
    result += val;
  }
  return result;
};

const multiply = function (a) {
  let result = 1;
  for (let val of a) {
    result *= val;
  }
  return result;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let result = 1;
  if (a === 0 || a === 1) return result;
  for (i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
