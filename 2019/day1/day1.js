const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");
console.log(data);
let sum = 0;
for (let i = 0; i < data.length; i++) {
  sum = sum + (Math.floor(parseInt(data[i]) / 3) - 2);
}
console.log(sum);
