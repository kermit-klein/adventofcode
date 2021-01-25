const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n").map((e) => parseInt(e));

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let left = [];
  let right = [];
  let pivot = arr.pop();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

function findFreqs(arr) {
  let sorted = quickSort(arr);
  let threes = 0;
  let ones = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] == 1 + sorted[i]) {
      ones++;
    } else if (sorted[i + 1] == 3 + sorted[i]) {
      threes++;
    }
  }
  return (threes + 1) * (ones + 1);
}

// console.log(findFreqs(data));

// PART 2

let max = Math.max(...data);
let newData = [...data];
newData.push(max + 3);

const memo = {};

function findCombis(currentEnd, availAdapters) {
  if (currentEnd == max) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i <= 3; i++) {
    if (availAdapters.includes(currentEnd + i)) {
      const remaining = availAdapters.filter((value) => value > currentEnd + i);
      if (memo[currentEnd + i] == null) {
        memo[currentEnd + i] = findCombis(currentEnd + i, remaining);
      }
      count += memo[currentEnd + i];
    }
  }
  return count;
}

console.log(findCombis(0, newData));
