const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().trim();
input = input.split("\n");

const solution = (input) => {
  if (input % 4 == 0) {
    if (input % 100 == 0) {
      if (input % 400 == 0) {
        console.log(1);
        return;
      }
      console.log(0);
      return;
    }
    console.log(1);
    return;
  }
  console.log(0);
  return;
};

solution(+input);
