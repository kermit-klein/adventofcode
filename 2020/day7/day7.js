const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

function getBag(e) {
  let splitElement = e.split(" ");
  return [splitElement[0], splitElement[1]];
}

function getBagProperty(e) {
  let props = e.match(/\d\s\w+\s\w+/g);
  return props;
}

function findShinyG(arr) {
  let count = 0;
  arr.forEach((element) => {
    let properties = getBagProperty(element);

    if (properties !== null) {
    }

    // let shinyB = properties[1] + properties[2];
    // if (shinyB == "shinygold") {
    //   count++;
    // }
  });
  console.log(count);
}

findShinyG(data);
