const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

/////////////////////////
let bigList = [];
function findGold(arr) {
  if (arr.length == 0) {
    return;
  }
  let list = [];
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < data.length; i++) {
      let inside = data[i].match(/\d\s\w+\s\w+/g);
      if (inside !== null) {
        inside.forEach((element) => {
          if (
            element.split(" ")[1] == arr[j][0] &&
            element.split(" ")[2] == arr[j][1]
          ) {
            list.push([data[i].split(" ")[0], data[i].split(" ")[1]]);
          }
        });
      }
    }
  }
  bigList.push(removeDups(list));
  return findGold(removeDups(list));
}

function removeDups(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i][0] + arr[i][1])) {
      obj[arr[i][0] + arr[i][1]] = arr[i];
    }
  }
  return Object.values(obj);
}

// findGold([["shiny", "gold"]]);
// console.log(removeDups(bigList.flat()).length);

/// Part 2

let bigList2 = [];
function findNumbers(arr) {
  if (arr.length == 0) {
    return;
  }
  let list = [];
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].split(" ")[0] == arr[j][1] &&
        data[i].split(" ")[1] == arr[j][2]
      ) {
        let inside = data[i].match(/\d\s\w+\s\w+/g);
        if (inside !== null) {
          inside.forEach((element) => {
            let editEl = element.split(" ");
            editEl[0] = "" + parseInt(editEl[0]) * parseInt(arr[j][0]);
            list.push(editEl);
          });
        }
      }
    }
  }
  bigList2.push(list);
  return findNumbers(list);
}

findNumbers([["1", "shiny", "gold"]]);
console.log(
  bigList2
    .flat()
    .map((e) => +e[0])
    .reduce((acc, cur) => acc + cur, 0)
);
