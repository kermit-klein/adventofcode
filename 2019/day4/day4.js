let countValidPasswords = () => {
  let validCount = 0;
  for (let i = 359282; i < 820401; i++) {
    let current = Array.from(String(i), Number);
    if (checkAdjacentRule(current) && checkIncreaseRule(current)) {
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
