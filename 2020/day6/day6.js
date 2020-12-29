const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split(/\n{2,}/g);
let mappedData = data.map((e) => e.replace(/\n/g, ""));
console.log(mappedData);
