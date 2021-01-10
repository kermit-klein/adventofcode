const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");
//PART 1
function runGameBoy(arr) {
  let acc = 0;
  let visited = [];
  let ind = 0;
  while (visited.indexOf(ind) == -1) {
    if (arr[ind] === undefined) {
      return [acc, ind, arr.length];
    }
    let token = arr[ind].split(" ");
    if (token[0] === "acc") {
      acc += +token[1];
      visited.push(ind);
      ind++;
    } else if (token[0] === "nop") {
      visited.push(ind);
      ind++;
    } else if (token[0] === "jmp") {
      visited.push(ind);
      ind += +token[1];
    }
  }
  return [acc, ind, arr.length];
}

// console.log(runGameBoy(data));

//PART 2

function swapAndRun(arr) {
  for (let i = 0; i < arr.length; i++) {
    let token = arr[i].split(" ");
    let dummyArr = [...arr];
    if (token[0] === "jmp") {
      token[0] = "nop";
      dummyArr[i] = token[0] + " " + token[1];
      let result = runGameBoy(dummyArr);
      if (result[1] == result[2]) {
        return result[0];
      }
    } else if (token[0] === "nop") {
      token[0] = "jmp";
      dummyArr[i] = token[0] + " " + token[1];
      let result = runGameBoy(dummyArr);
      if (result[1] == result[2]) {
        return result[0];
      }
    }
  }
}

console.log(swapAndRun(data));
