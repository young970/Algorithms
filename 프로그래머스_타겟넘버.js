function solution(numbers, target) {
  let answer = 0;
  let length = numbers.length;

  function dfs(num, depth) {
    if (depth == length) {
      if (num == target) answer++;
    } else {
      dfs(num + numbers[depth], depth + 1);
      dfs(num - numbers[depth], depth + 1);
    }
  }
  dfs(0, 0);
  console.log(answer);
  return answer;
}

let numbers = [4, 1, 2, 1];
let target = 4;
//   result = 2

solution(numbers, target);
