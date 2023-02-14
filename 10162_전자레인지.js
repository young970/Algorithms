const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filepath).toString().trim();
input = Number(input);

const sol = (t) => {
  let a = 0;
  let b = 0;
  let c = 0;

  a = parseInt(t / 300);
  t = t % 300;

  b = parseInt(t / 60);
  t = t % 60;

  c = parseInt(t / 10);
  t = t % 10;
  if (t != 0) {
    console.log(-1);
  } else console.log(a, b, c);
};

sol(input);
