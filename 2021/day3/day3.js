const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

let findGamma = (data) => {
  let elementLength = data[0].length;
  let gamma = "";
  for (let i = 0; i < elementLength; i++) {
    let count1 = 0;
    let count0 = 0;
    for (let j = 0; j < data.length; j++) {
      if (data[j][i] === "0") {
        count0++;
      } else {
        count1++;
      }
    }
    count0 > count1 ? (gamma += "0") : (gamma += "1");
  }
  console.log(gamma);
  console.log(parseInt(gamma, 2));
  return gamma;
};

findGamma(data);

let findEpsilon = (gamma) => {
  let epsilon = gamma.split("").map((e) => (e === "0" ? "1" : "0"));
  console.log(parseInt(epsilon.join(""), 2));
};

findEpsilon(findGamma(data));
