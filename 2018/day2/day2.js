const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

let check2and3 = (arr) => {
  let count2 = 0;
  let count3 = 0;
  for (let i = 0; i < arr.length; i++) {
    let obj = {};
    let seperated = arr[i].split("");
    for (let j = 0; j < seperated.length; j++) {
      if (!obj.hasOwnProperty(seperated[j])) {
        obj[seperated[j]] = 1;
      } else obj[seperated[j]]++;
    }
    let twoInd = 0;
    let threeInd = 0;
    for (let e in obj) {
      if (obj[e] == 2 && twoInd == 0) {
        twoInd++;
        count2++;
      } else if (obj[e] == 3 && threeInd == 0) {
        threeInd++;
        count3++;
      }
    }
  }
  console.log(count2, count3);
};

// check2and3(data);

//Part 2

let findSmallDiff = (arr) => {
  let seperated = [];
  for (let i = 0; i < arr.length; i++) {
    seperated.push(arr[i].split(""));
  }

  for (let i = 0; i < seperated.length; i++) {
    for (let j = i; j < seperated.length; j++) {
      let wrong = [];
      for (let m = 0; m < seperated[i].length; m++) {
        if (seperated[i][m] !== seperated[j][m]) {
          wrong.push([i, j, m]);
        }
      }
      if (wrong.length == 1) {
        seperated[i].splice(wrong[0][2], 1);
        return console.log(seperated[i].join(""));
      }
    }
  }
};

findSmallDiff(data);
