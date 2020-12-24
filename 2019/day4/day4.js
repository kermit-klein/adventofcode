let countValidPasswords = () => {
  let validCount = 0;
  for (let i = 359282; i < 820401; i++) {
    let current = Array.from(String(i), Number);
    if (checkAdjacentRule2(current) && checkIncreaseRule(current)) {
      validCount++;
    }
  }
  return console.log(validCount);
};

let checkAdjacentRule = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      return true;
    } else {
      continue;
    }
  }
  return false;
};

let checkAdjacentRule2 = (arr) => {
  let countObj = {};
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      if (!countObj[arr[i]]) {
        countObj[arr[i]] = 2;
      } else {
        countObj[arr[i]]++;
      }
    }
  }
  for (let n in countObj) {
    if (countObj[n] % 2 == 0) {
      continue;
    } else if (countObj[n] % 2 !== 0) {
      return false;
    }
  }
  return true;
};

let checkIncreaseRule = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

countValidPasswords();
