const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text
  .split("\n\n")
  .filter((x) => Boolean(x))
  .map((x) =>
    x
      .replace(/[\n ,]+/g, " ")
      .trim()
      .split(" ")
  );

console.log(data);
