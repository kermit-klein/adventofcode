const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");
const matrice = data.map((e) => e.split(""));

let newM = [...matrice];
for (let j = 0; j < matrice.length; j++) {
  for (let i = 0; i < matrice.length; i++) {
    newM[i] = newM[i].concat(matrice[i]);
  }
}
const stepDown31 = (arr) => {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][i * 3] === "#") {
      count++;
    }
  }
  return console.log(count);
};

const stepDown11 = (arr) => {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][i] === "#") {
      count++;
    }
  }
  return console.log(count);
};

const stepDown51 = (arr) => {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][i * 5] === "#") {
      count++;
    }
  }
  return console.log(count);
};

const stepDown71 = (arr) => {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][i * 7] === "#") {
      count++;
    }
  }
  return console.log(count);
};

const stepDown12 = (arr) => {
  let count = 0;
  for (let i = 1; i < arr.length / 2; i++) {
    if (arr[i * 2][i] === "#") {
      count++;
    }
  }
  return console.log(count);
};

stepDown12(newM);
stepDown71(newM);
stepDown11(newM);
stepDown51(newM);
stepDown31(newM);
