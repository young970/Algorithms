// Run by Node.js
// const sol = (n, data) => {
//   let num_word = n[0][0];
//   let sellect = n[0][1];
//   let c = num_word - 1;
//   while (c != 0) {
//     for (i = num_word - 1; i > 0; i--) {
//       if (data[i].length < data[i - 1].length) {
//         let temp = data[i - 1];
//         data[i - 1] = data[i];
//         data[i] = temp;
//       } else if (data[i].length == data[i - 1].length) {
//         if (data[i] < data[i - 1]) {
//           let temp = data[i - 1];
//           data[i - 1] = data[i];
//           data[i] = temp;
//         }
//       }
//     }
//     c--;
//   }
//   console.log(data);
//   console.log(data[sellect - 1]);
// };

const sol = (n, data) => {
  let num_word = n[0][0];
  let sellect = n[0][1];
  let c = num_word - 1;
  data.sort(function (a, b) {
    if (a.length > b.length) return 1;
    if (a.length == b.length) {
      if (a > b) return 1;
      if (a < b) return -1;
    }
    if (a.length < b.length) return -1;
  });
  console.log(data[sellect - 1]);
};

const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = [];
  let count = 0;
  const data = [];

  for await (const line of rl) {
    if (N.length == 0) {
      N.push(line.split(" ").map((a) => +a));
    } else {
      data.push(line);
      count += 1;
    }
    if (N[0] == count) {
      rl.close();
    }
  }
  sol(N, data);
  process.exit();
})();
