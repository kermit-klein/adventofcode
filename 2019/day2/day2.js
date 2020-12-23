const fs = require("fs");
const util = require("util");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split(",").map((e) => parseInt(e));
const newData = [...data];
newData[1] = 12;
newData[2] = 2;

function reduceCode(arr) {
  for (let i = 0; i < arr.length; i = i + 4) {
    console.log(i);
    if (arr[i] == 1) {
      arr[arr[i + 3]] = arr[arr[i + 1]] + arr[arr[i + 2]];
    } else if (arr[i] == 2) {
      arr[arr[i + 3]] = arr[arr[i + 1]] * arr[arr[i + 2]];
    } else if (arr[i] == 99) {
      break;
    }
  }
  return arr;
}

console.log(util.inspect(reduceCode(newData), { maxArrayLength: null }));
