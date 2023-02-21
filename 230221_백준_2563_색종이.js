const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().trim();
input = input.split("\n");
const [n, ...data] = input;

const solution = () => {
  let graph = Array.from(Array(100), () => Array(100).fill(false));
  let paper_arr = [];
  for (let i = 0; i < n; i++) {
    paper_arr.push(data[i].split(" ").map((a) => +a));
  }

  for (let j = 0; j < n; j++) {
    const [x, y] = paper_arr[j];

    for (let k = 0; k < 10; k++) {
      for (let m = 0; m < 10; m++) {
        graph[x + k][y + m] = true;
      }
    }
  }

  let answer = graph.reduce((prev, curr) => {
    for (let elem of curr) {
      if (elem) {
        prev++;
      }
    }
    return prev;
  }, 0);

  console.log(answer);
};

solution(+n, data);
