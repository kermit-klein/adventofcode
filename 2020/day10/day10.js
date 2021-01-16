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

console.log(quickSort(data));
