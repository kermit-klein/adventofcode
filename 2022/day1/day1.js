const fs = require("fs");
const text = fs.readFileSync("./data1.txt").toString("utf-8");
const data = text.split(/^\s*$/gm);

const findHigh = () => {
  let highestSoFar = 0;
  data.forEach((island) => {
    let totalSum = island
      .split(/\n/)
      .filter((e) => e !== "")
      .map((e) => parseInt(e))
      .reduce((a, b) => a + b);
    if (totalSum > highestSoFar) {
      highestSoFar = totalSum;
    }
  });
  return highestSoFar;
};

const findTopThreeHigh = () => {
  let totalsArr = [];
  data.forEach((island) => {
    let totalSum = island
      .split(/\n/)
      .filter((e) => e !== "")
      .map((e) => parseInt(e))
      .reduce((a, b) => a + b);
    totalsArr.push(totalSum);
  });
  let sortedArr = totalsArr.sort((a, b) => a - b).reverse();
  return sortedArr[0] + sortedArr[1] + sortedArr[2];
};

console.log(findHigh());
console.log(findTopThreeHigh());
