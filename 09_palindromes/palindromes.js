const palindromes = function (string) {
  let stringToCheck = "";
  for (let char of string.toLowerCase()) {
    if (!/[^a-z]/.test(char)) stringToCheck += char;
  }

  let i = 0;
  let j = stringToCheck.length - 1;
  for (i, j; i < j; i++, j--) {
    if (stringToCheck[i] !== stringToCheck[j]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
