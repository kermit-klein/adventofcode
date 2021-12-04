const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

let count = 0;
data.forEach((element, index) => {
  if (
    parseInt(element) < parseInt(data[index + 1]) &&
    index !== data.length - 1
  ) {
    count++;
  }
});

console.log(count);
