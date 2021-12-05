const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

console.log(data);

let findPos = (data) => {
  let verticalPos = 0;
  let horizontalPos = 0;
  data.forEach((element) => {
    let splittedEle = element.split(" ");
    if (splittedEle[0] === "forward") {
      horizontalPos += parseInt(splittedEle[1]);
    } else if (splittedEle[0] === "up") {
      verticalPos -= parseInt(splittedEle[1]);
    } else {
      verticalPos += parseInt(splittedEle[1]);
    }
  });
  console.log(verticalPos, horizontalPos, verticalPos * horizontalPos);
};

findPos(data);
