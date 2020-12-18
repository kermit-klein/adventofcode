const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

let day1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    j = i + 1;
    while (sum !== 2020 && j <= arr.length) {
      sum = parseInt(arr[i]) + parseInt(arr[j]);
      if (sum == 2020) {
        console.log(arr[i], arr[j], arr[i] * arr[j]);
      }
      j++;
    }
  }
};

day1(data);

let day1_part2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      let sum = 0;
      j = k + 1;
      while (sum !== 2020 && j <= arr.length) {
        sum = parseInt(arr[i]) + parseInt(arr[k]) + parseInt(arr[j]);
        if (sum == 2020) {
          console.log(arr[i], arr[j], arr[k], arr[i] * arr[j] * arr[k]);
        }
        j++;
      }
    }
  }
};

day1_part2(data);
