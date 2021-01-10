const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n").map((e) => +e);

// Part 1

function findPairs(pos, num) {
  let start = pos - 25;
  let end = pos - 1;

  for (let i = start; i < end + 1; i++) {
    let sum = 0;
    j = i + 1;
    while (sum !== num && j <= end) {
      sum = data[i] + data[j];
      if (sum == num) {
        return true;
      }
      j++;
    }
  }
  return false;
}

function encodingErr(arr) {
  for (let i = 25; i < arr.length; i++) {
    let result = findPairs(i, arr[i]);
    if (result == false) {
      return [i, arr[i]];
    }
  }
}

console.log(encodingErr(data));
