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

// console.log(process(mappedData));

// Part 2

let mappedData2 = data.map((e) => e.split(/\n/g));

function findSameAns(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count = count + comparison(arr[i]);
  }
  return count;
}

function comparison(arr) {
  let shortInd = findShortest(arr);
  let sameAnswer = 0;
  for (let j = 0; j < arr[shortInd].length; j++) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].split("").some((e) => e === arr[shortInd][j])) {
        count++;
      }
    }
    if (count == arr.length) {
      sameAnswer++;
    }
  }
  return sameAnswer;
}

function findShortest(arr) {
  let lengthsArr = [];
  for (let i = 0; i < arr.length; i++) {
    lengthsArr.push(arr[i].length);
  }
  return lengthsArr.indexOf(Math.min(...lengthsArr));
}

console.log(findSameAns(mappedData2));
