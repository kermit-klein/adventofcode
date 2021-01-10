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

// console.log(encodingErr(data));

//Part 2
let theNum = 776203571;
function findSeq(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > theNum) {
        break;
      } else if (sum == theNum) {
        let arrSegment = arr.slice(i, j + 1).sort((a, b) => a - b);

        return arrSegment[0] + arrSegment[arrSegment.length - 1];
      }
    }
  }
}

console.log(findSeq(data));
