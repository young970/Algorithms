// Run by Node.js
const sol = (n) => {
  for (i = n - 1; i >= 0; i--) {
    console.log(" ".repeat(i) + "*".repeat(n - i));
  }
};

const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null;

  for await (const line of rl) {
    if (!N) {
      N = +line;
    }
    rl.close();
  }

  sol(N);
  process.exit();
})();
