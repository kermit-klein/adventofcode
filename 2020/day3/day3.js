const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");
const matrice = data.map((e) => e.split(""));
console.log(matrice);
