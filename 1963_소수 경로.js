const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().trim();
input = input.split("\n");

function get_prime_nums() {
  const prime = Array(10000).fill(true);
  prime[0] = false;
  prime[1] = false;

  for (i = 2; i < 10000; i++) {
    if (prime[i] == true) {
      let j = 2;
      while (i * j < 10000) {
        prime[i * j] = false;
        j += 1;
      }
    }
  }
  return prime;
}

function bfs(start, target, prime_nums) {
  const q = [];
  q.push([start, 0]);
  const visited = Array(10000).fill(false);
  visited[start] = true;

  while (q) {
    let pop = q.shift();
    let current = pop[0];
    let cnt = pop[1];

    if (current == target) return cnt;

    current = current.toString();

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 10; j++) {
        let temp = parseInt(
          current.slice(0, i) + String(j) + current.slice(i + 1, 4)
        );
        if (
          visited[temp] == false &&
          prime_nums[temp] == true &&
          temp >= 1000
        ) {
          visited[temp] = true;
          q.push([temp, cnt + 1]);
        }
      }
    }
  }
  return "Impossible";
}

const sol = ([n, ...arr]) => {
  n = +n;
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push(arr[i].split(" ").map((v) => +v));
  }
  let prime_nums = get_prime_nums();
  for (let j = 0; j < n; j++) {
    console.log(bfs(data[j][0], data[j][1], prime_nums));
  }
};

sol(input);
