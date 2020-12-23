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

// console.log(util.inspect(reduceCode(newData), { maxArrayLength: null }));

//part 2

function reduceCodePart2(arr) {
  for (let i = 0; i < arr.length; i = i + 4) {
    if (arr[i] == 1) {
      arr[arr[i + 3]] = arr[arr[i + 1]] + arr[arr[i + 2]];
    } else if (arr[i] == 2) {
      arr[arr[i + 3]] = arr[arr[i + 1]] * arr[arr[i + 2]];
    } else if (arr[i] == 99) {
      break;
    }
  }
  return arr[0];
}

// console.log(reduceCodePart2(data));

function findInput() {
  for (let i = 0; i < 100; i++) {
    for (let j = i; j < 100; j++) {
      let findInputData = [...data];
      findInputData[1] = i;
      findInputData[2] = j;
      if (reduceCodePart2(findInputData) === 19690720) {
        return console.log(i, j, 100 * i + j);
      }
    }
  }
}

findInput();
