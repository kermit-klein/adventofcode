const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

// PART 1

let getFreq = (arr) => {
  let finalFreq = arr
    .map((e) => parseInt(e))
    .reduce((acc, cur) => acc + cur, 0);
  return finalFreq;
};

console.log(getFreq(data));

// PART 2
