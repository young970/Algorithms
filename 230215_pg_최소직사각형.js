function solution(sizes) {
  var answer = 0;
  let temp;
  for (i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      temp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = temp;
    }
  }
  let max1 = Math.max(...sizes.map((row) => row[0]));
  let max2 = Math.max(...sizes.map((row) => row[1]));
  answer = max1 * max2;
  return answer;
}

// let sizes = [
//   [60, 50],
//   [30, 70],
//   [60, 30],
//   [80, 40],
// ]; //result = 4000
// let sizes = [
//   [10, 7],
//   [12, 3],
//   [8, 15],
//   [14, 7],
//   [5, 15],
// ]; //result = 120
let sizes = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]; //result = 133
solution(sizes);
