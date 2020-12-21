const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n\n");

let findValid = (arr) => {
  let valid = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      /byr:(19[2-9][0-9]|200[0-2])/.test(arr[i]) &&
      /iyr:20(1[0-9]|20)/.test(arr[i]) &&
      /eyr:20(2[0-9]|30)/.test(arr[i]) &&
      /hgt:(1(5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-3])cm|(59|6[0-9]|7[0-6])in)/.test(
        arr[i]
      ) &&
      /hcl:#([0-9a-f]){6}/.test(arr[i]) &&
      /ecl:(amb|blu|brn|gry|grn|hzl|oth)/.test(arr[i]) &&
      /pid:[0-9]{9}\b/.test(arr[i])
    ) {
      valid++;
    }
  }
  return console.log(valid);
};

findValid(data);
