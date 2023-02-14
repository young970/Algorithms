const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().trim();
input = input.split("\n");

const sol = ([n, ...arr]) => {
  n = +n;
  const dp = [];
  for (i = 0; i < n; i++) {
    dp.push(arr[i].split(" ").map((v) => +v));
  }

  let prev;
  for (i = 1; i < n; i++) {
    for (j = 0; j <= i; j++) {
      if (j === 0) prev = dp[i - 1][j];
      else if (j === i) prev = dp[i - 1][j - 1];
      else prev = Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      dp[i][j] += prev;
    }
  }
  console.log(Math.max(...dp[n - 1]));
};

sol(input);
