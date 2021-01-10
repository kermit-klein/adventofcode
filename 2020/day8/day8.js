const fs = require("fs");
const text = fs.readFileSync("./data.txt").toString("utf-8");
const data = text.split("\n");
//PART 1
function runGameBoy(arr) {
  let acc = 0;
  let visited = [];
  let ind = 0;
  while (visited.indexOf(ind) == -1) {
    let token = arr[ind].split(" ");
    if (arr[ind].split(" ")[0] === "acc") {
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
  return acc;
}

console.log(runGameBoy(data));
