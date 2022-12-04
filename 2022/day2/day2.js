const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

let dict = {
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
  A: "Rock",
  B: "Paper",
  C: "Scissors",
};

const selectionPoint = (selection) => {
  if (selection === dict.X) {
    return 1;
  } else if (selection === dict.Y) {
    return 2;
  } else if (selection === dict.Z) {
    return 3;
  }
  throw Error("No score for selection");
};

const outcomePoint = (mySelection, opponentSelection) => {
  if (
    (mySelection === "Paper" && opponentSelection === "Rock") ||
    (mySelection === "Scissors" && opponentSelection === "Paper") ||
    (mySelection === "Rock" && opponentSelection === "Scissors")
  ) {
    return 6;
  } else if (mySelection === opponentSelection) {
    return 3;
  } else {
    return 0;
  }
};

const calculateDataSet = (data) => {
  let finalScore = 0;
  data.forEach((ele) => {
    const [opp, my] = ele.split(" ");
    let score = selectionPoint(dict[my]) + outcomePoint(dict[my], dict[opp]);
    finalScore += score;
  });
  return finalScore;
};

//############################################################################

let dict2 = {
  X: 0,
  Y: 3,
  Z: 6,
  A: { desc: "Rock", Z: 2, Y: 1, X: 3 },
  B: { desc: "Paper", Z: 3, Y: 2, X: 1 },
  C: { desc: "Scissors", Z: 1, Y: 3, X: 2 },
};

const calculateDataSet2 = (data) => {
  let finalScore = 0;
  data.forEach((ele) => {
    const [opp, my] = ele.split(" ");
    let score = dict2[opp][my] + dict2[my];
    finalScore += score;
  });
  return finalScore;
};

console.log(calculateDataSet2(data));
