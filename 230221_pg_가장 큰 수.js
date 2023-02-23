function solution(numbers) {
  var answer = 0;
  let arr = numbers.map((num) => num + "");
  answer = arr.sort((a, b) => b + a - (a + b)).join("");
  if (answer[0] == "0") return "0";
  console.log(answer);
  return answer;
}

let numbers = [6, 10, 2];
solution(numbers);
