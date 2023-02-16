function solution(brown, yellow) {
  var answer = [];

  for (i = yellow; i >= 1; i--) {
    if (yellow % i == 0) {
      if ((i + 2) * (yellow / i + 2) == brown + yellow) {
        answer = [i + 2, yellow / i + 2];
        break;
      }
    }
  }
  console.log(answer);
  return answer;
}

let brown = 10;
let yellow = 2;
// result = [4,3]

solution(brown, yellow);
