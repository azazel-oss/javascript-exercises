const removeFromArray = function (arr, ...element) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let flag = false;

    for (let ele of element) {
      if (ele === arr[i]) {
        flag = true;
      }
    }

    if (!flag) {
      result.push(arr[i]);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
