function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  let visited = Array.from({ length: n + 1 }, () => 0);
  let count = 1;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  for (let [a, b] of wires) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  const dfs = (song) => {
    for (let i = 1; i <= n; i++) {
      if (visited[i] == 0 && graph[song][i] == 1) {
        visited[song] = 1;
        count++;
        dfs(i);
        visited[song] = 0;
      }
    }
  };

  for (let [a, b] of wires) {
    count = 1;
    graph[a][b] = 0;
    graph[b][a] = 0;
    dfs(1);
    graph[a][b] = 1;
    graph[b][a] = 1;
    answer = Math.min(answer, Math.abs(n - count - count));
  }
  console.log(answer);
  return answer;
}

let n = 9;
const wires = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];
solution(n, wires);
