const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

let sonarSweep = (sweep) => {
  let count = 0;
  sweep.forEach((element, index) => {
    if (
      parseInt(element) < parseInt(sweep[index + 1]) &&
      index !== sweep.length - 1
    ) {
      count++;
    }
  });
  console.log(count);
};

sonarSweep(data);
let threeMeasure = [];
data.forEach((element, index) => {
  if (data[index + 2]) {
    threeMeasure.push(
      parseInt(element) + parseInt(data[index + 1]) + parseInt(data[index + 2])
    );
  }
});
sonarSweep(threeMeasure);
