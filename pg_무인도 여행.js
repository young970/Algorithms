function solution(maps) {
  const answer = [];
  const visited = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(0)
  );
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const bfs = (x, y) => {
    const queue = [];
    queue.push([x, y]);
    let cnt = 0;

    while (queue.length) {
      let [x, y] = queue.shift();
      cnt += Number(maps[x][y]);

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (0 <= nx && nx < maps.length && 0 <= ny && ny < maps[0].length) {
          if (visited[nx][ny] == 0 && maps[nx][ny] != "X") {
            visited[nx][ny] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
    return cnt;
  };

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (visited[i][j] == 0 && maps[i][j] != "X") {
        visited[i][j] = 1;
        answer.push(bfs(i, j));
      }
    }
  }
  if (answer.length) {
    answer.sort((a, b) => a - b);
    return answer;
  } else {
    return [-1];
  }
}

const maps = ["XXX", "XXX", "XXX"];

solution(maps);
