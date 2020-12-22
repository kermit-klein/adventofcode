const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");
// console.log(data);

/// part 1
let sum = 0;
for (let i = 0; i < data.length; i++) {
  sum = sum + (Math.floor(parseInt(data[i]) / 3) - 2);
}

/// part 2

function checkElement(n) {
  if (n[n.length - 1] <= 0) {
    n.shift();
    n.pop();
    return n;
  }
  let newN = Math.floor(parseInt(n[n.length - 1]) / 3) - 2;
  n.push(newN);
  return checkElement(n);
}

let calculateFuel = (arr) => {
  let fuelNeed = [];
  for (let i = 0; i < arr.length; i++) {
    fuelNeed[i] = checkElement([parseInt(arr[i])]).reduce((a, b) => a + b, 0);
  }
  fuelNeed = fuelNeed.reduce((a, b) => a + b, 0);
  return console.log(fuelNeed);
};

calculateFuel(data);
