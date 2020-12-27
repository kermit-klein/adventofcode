const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

// PART 1

// let getFreq = (arr) => {
//   let finalFreq = arr
//     .map((e) => parseInt(e))
//     .reduce((acc, cur) => acc + cur, 0);
//   return finalFreq;
// };

// console.log(getFreq(data));

// PART 2

let obj = {};
let multips = [];
let start = 0;

let freqReduce = (arr, start) => {
  let finalFreq = arr
    .map((e) => parseInt(e))
    .reduce((acc, cur) => {
      if (!obj.hasOwnProperty(acc)) {
        obj[acc] = true;
      } else {
        multips.push(acc);
      }
      return acc + cur;
    }, start);
  return finalFreq;
};

while (multips.length == 0) {
  start = freqReduce(data, start);
}

console.log(multips[0]);
