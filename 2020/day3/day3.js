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
const stepDown = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i * 3] === "#") {
      count++;
    }
  }
  return console.log(count);
};

stepDown(newM);
