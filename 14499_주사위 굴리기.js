// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

// const fs = require("fs");
// let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let input = fs.readFileSync(filePath).toString().trim();
// input = input.split("\n");

// console.log(input);

// solution(inputC, inputTestCase);

// function solution(C, inputTestCase){

// }

const sol = ([n, ...arr]) => {
  n = +n;
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp.push(arr[i].split(" ").map((v) => +v));
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let prev;
      if (j === 0) prev = dp[i - 1][j];
      else if (j === i) prev = dp[i - 1][j - 1];
      else prev = Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      dp[i][j] += prev;
    }
  }
  console.log(Math.max(...dp[n - 1]));
};

const fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = input.split("\n");
console.log(input);
sol(input);
