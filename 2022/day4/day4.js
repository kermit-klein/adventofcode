const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

const findOverlaps = (data) => {
  let overlapCount = 0;
  data.forEach((ele) => {
    const groups = ele.split(",");
    const firstT = parseInt(groups[0].split("-")[0]);
    const secondT = parseInt(groups[0].split("-")[1]);
    const thirdT = parseInt(groups[1].split("-")[0]);
    const fourthT = parseInt(groups[1].split("-")[1]);

    if (firstT <= thirdT && secondT >= fourthT) {
      overlapCount++;
    } else if (firstT >= thirdT && secondT <= fourthT) {
      overlapCount++;
    }
  });
  return overlapCount;
};

console.log(findOverlaps(data));

// ######################

const findOverlaps2 = (data) => {
  let notOverlapCount = 0;
  data.forEach((ele) => {
    const groups = ele.split(",");
    const firstT = parseInt(groups[0].split("-")[0]);
    const secondT = parseInt(groups[0].split("-")[1]);
    const thirdT = parseInt(groups[1].split("-")[0]);
    const fourthT = parseInt(groups[1].split("-")[1]);

    if (thirdT > secondT && fourthT > firstT) {
      notOverlapCount++;
    } else if (fourthT < firstT && thirdT < secondT) {
      notOverlapCount++;
    }
  });
  return data.length - notOverlapCount;
};

console.log(findOverlaps2(data));
