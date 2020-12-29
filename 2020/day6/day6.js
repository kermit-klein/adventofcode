const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split(/\n{2,}/g);
let mappedData = data.map((e) => e.replace(/\n/g, ""));

let process = (data) => {
  let sprtd = data.map((e) => e.split(""));
  let resultArr = [];
  for (let i = 0; i < sprtd.length; i++) {
    resultArr.push(removeDup(sprtd[i]));
  }
  let count = resultArr.reduce((acc, cur) => acc + cur.length, 0);
  return count;
};

function removeDup(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = true;
    }
  }
  return Object.keys(obj);
}

console.log(process(mappedData));
