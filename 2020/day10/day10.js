const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.replace(/^\s*$[\n\r]*/, "1");
console.log(data);
