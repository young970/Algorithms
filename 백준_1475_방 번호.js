const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().trim();
input = input.split("\n");

const solution = (roomNnm) => {
  const num_list = roomNnm[0].split("").map((num) => parseInt(num));
  const graph = Array.from({ length: 10 }, () => 0);

  for (var i of num_list) {
    if (i == 6) {
      if (graph[i] > graph[9]) graph[9]++;
      else graph[i]++;
    } else if (i == 9) {
      if (graph[i] > graph[6]) graph[6]++;
      else graph[i]++;
    } else graph[i]++;
  }

  let count = 0;
  for (let j of graph) {
    count = Math.max(count, j);
  }
  console.log(count);
};

solution(input);
