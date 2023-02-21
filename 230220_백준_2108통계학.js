const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().trim();
input = input.split("\n");
let [n, ...data] = input;

const solution = (n, data) => {
  data = data.map((a) => parseInt(a));
  data.sort((a, b) => a - b);

  // 산술 평균
  const avg = Math.round(data.reduce((a, b) => a + b, 0) / n);
  if (avg == -0) {
    console.log(0);
  } else console.log(avg);

  // 중앙값
  mid = parseInt(data[Math.floor(n / 2)]);
  console.log(mid);

  // 최빈값
  let max = 0;
  mostAppearances = [];
  let num = new Array(8001);
  num.fill(0, 0, 8001);
  // 각 숫자가 몇번씩 등장했는지 계산한다.
  for (let i = 0; i < data.length; i++) {
    if (data[i] < 0) {
      num[-data[i] + 4000]++;
    } else if (data[i] >= 0) {
      num[Number(data[i])]++;
    }
  }
  // 몇 번 이상 등장해야 최빈수가 될 수 있는지 확인한다.
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) max = num[i];
  }

  for (let i = 8000; i >= 4001; i--) {
    if (num[i] !== 0 && num[i] >= max) {
      mostAppearances.push(-(i - 4000));
    }
  }
  for (let i = 0; i <= 4000; i++) {
    if (num[i] !== 0 && num[i] >= max) {
      mostAppearances.push(i);
    }
  }

  if (mostAppearances.length === 1) console.log(mostAppearances[0]);
  else if (mostAppearances.length >= 2) console.log(mostAppearances[1]);

  // 범위
  let range = data[data.length - 1] - data[0];
  console.log(range);
};

solution(+n, data);
