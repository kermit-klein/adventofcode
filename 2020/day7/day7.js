const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

function checkBag(bag) {
  let inside = bag.match(/\d\s\w+\s\w+/g);
  if (inside !== null) {
    inside.forEach((element) => {
      if (element.split(" ")[1] == "shiny" && element.split(" ")[2] == "gold") {
        return true;
      }
    });
  }
}

function findBagInd(str1, str2) {
  for (let i = 0; i < data.length; i++) {
    if (str1 == data[i].split(" ")[0] && str2 == data[i].split(" ")[1]) {
      return i;
    }
  }
}

function bagContent(bag) {
  let inside = bag.match(/\d\s\w+\s\w+/g);
  let bags = [];
  if (inside !== null) {
    inside.forEach((element) => {
      bags.push(element.split(" ")[1] + " " + element.split(" ")[2]);
    });
  }
  return bags;
}

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
  bigList.push(list);
  return findGold(list);
}

function removeDups(arr) {}

findGold([["shiny", "gold"]]);
console.log(bigList[1]);
