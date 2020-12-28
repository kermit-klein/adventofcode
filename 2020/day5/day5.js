const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");

let nData = [];

function seperateElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    nData.push(arr[i].split(""));
  }
}

function findRow(arr) {
  let rowSeries = [];
  for (let i = 0; i < arr.length; i++) {
    let maxRow = [0, 127];
    for (let j = 0; j < 7; j++) {
      if (arr[i][j] == "F") {
        maxRow = [
          maxRow[0],
          Math.floor((maxRow[1] - maxRow[0]) / 2) + maxRow[0],
        ];
      } else if (arr[i][j] == "B") {
        maxRow = [
          Math.ceil((maxRow[1] - maxRow[0]) / 2) + maxRow[0],
          maxRow[1],
        ];
      }
    }
    rowSeries.push(maxRow[0]);
  }
  return rowSeries;
}

function findColumn(arr) {
  let columnSeries = [];
  for (let i = 0; i < arr.length; i++) {
    let maxColumn = [0, 8];
    for (let j = 7; j < 10; j++) {
      if (arr[i][j] == "L") {
        maxColumn = [
          maxColumn[0],
          Math.floor((maxColumn[1] - maxColumn[0]) / 2) + maxColumn[0],
        ];
      } else if (arr[i][j] == "R") {
        maxColumn = [
          Math.ceil((maxColumn[1] - maxColumn[0]) / 2) + maxColumn[0],
          maxColumn[1],
        ];
      }
    }
    columnSeries.push(maxColumn[0]);
  }
  return columnSeries;
}

function findIDs() {
  let idArr = [];
  let rows = findRow(nData);
  let columns = findColumn(nData);
  for (let i = 0; i < rows.length; i++) {
    idArr.push(rows[i] * 8 + columns[i]);
  }
  return idArr;
}

function findMaxId(arr) {
  let sorted = arr.sort((a, b) => b - a);
  return console.log(sorted[0]);
}

seperateElements(data);
findColumn(nData);
findRow(nData);
findIDs();
findMaxId(findIDs());
