function solution(k, dungeons) {
  var answer = -1;
  let tem = [];
  let visited = Array(dungeons.length).fill(0);

  const dfs = (piro, depth) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (piro >= dungeons[i][0] && visited[i] == 0) {
        visited[i] = 1;
        piro -= dungeons[i][1]; // 80 60 50
        depth += 1; // 1 2
        dfs(piro, depth);
        visited[i] = 0;
        piro += dungeons[i][1];
        depth -= 1;
      }
    }
    tem.push(depth);
  };

  dfs(k, 0);
  answer = Math.max(...tem);
  console.log(answer);
  return answer;
}

k = 80;
dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];
// result = 3
solution(k, dungeons);
