const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().trim();
input = input.split("\n");
let t = input[0];

const solution = (numAnd_index, doc_list) => {
  let [total, index] = numAnd_index.split(" ").map((num) => parseInt(num));
  const queue = doc_list.split(" ").map((num) => parseInt(num));
  let count = 0;

  while (1) {
    let pop = queue.shift();
    if (Math.max(...queue) <= pop && index == 0) {
      count++;
      console.log(count);
      break;
    } else if (Math.max(...queue) > pop && index == 0) {
      queue.push(pop);
      index = queue.length - 1;
    } else if (Math.max(...queue) <= pop && index != 0) {
      count++;
      index--;
    } else if (Math.max(...queue) > pop && index != 0) {
      queue.push(pop);
      index--;
    }
  }
};

for (let i = 1; i <= 2 * t; i += 2) {
  solution(input[i], input[i + 1]);
}
