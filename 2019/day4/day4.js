let countValidPasswords = () => {
  let validCount = 0;
  for (let i = 359282; i < 820402; i++) {
    let current = Array.from(String(i), Number);
    if (checkAdjacentRule2(current) && checkIncreaseRule(current)) {
      console.log(current);
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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      if (!countObj[arr[i]]) {
        countObj[arr[i]] = [i, i + 1];
      } else {
        if (arr[i - 1] !== arr[i]) {
          countObj[arr[i]].push(i, i + 1);
        } else {
          countObj[arr[i]].push(i + 1);
        }
      }
    }
  }
  for (let n in countObj) {
    if (countObj[n].length != 2) {
      continue;
    } else if (countObj[n].length == 2) {
      return true;
    }
  }
  return false;
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
