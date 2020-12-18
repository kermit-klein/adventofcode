const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

let checkPass = (arr) => {
  let valid = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let numberRule = arr[i].match(/\d+-\d+/)[0].split("-");
    let letterRule = arr[i].match(/\w:/)[0].split("")[0];
    let password = arr[i].match(/\w*$/)[0].split("");
    let occurence = password.filter((e) => e === letterRule).length;

    if (
      occurence >= parseInt(numberRule[0]) &&
      occurence <= parseInt(numberRule[1])
    ) {
      valid++;
    }
  }
  return console.log(valid);
};

checkPass(data);
