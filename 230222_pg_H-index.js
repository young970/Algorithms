function solution(citations) {
  var answer = [];
  citations.sort((a, b) => b - a);

  for (let quote = 1; quote <= citations[0]; quote++) {
    let count_arr = citations.filter((c) => c >= quote);
    if (
      count_arr.length >= quote &&
      citations.length - count_arr.length <= quote
    ) {
      answer.push(quote);
    }
  }
  if (answer.length == 0) return 0;
  answer = answer[answer.length - 1];
  console.log(answer);
  return answer;
}

let citations = [0, 0, 0, 0, 0];
solution(citations);
