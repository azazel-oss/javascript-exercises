const fibonacci = function (a) {
  a = Number.parseInt(a);
  if (a < 1) {
    return "OOPS";
  }
  let result = [1, 1];
  if (a === 1 || a === 2) {
    return 1;
  }
  for (let i = 2; i < a; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(-1)[0];
};

// Do not edit below this line
module.exports = fibonacci;
