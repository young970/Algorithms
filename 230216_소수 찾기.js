function solution(numbers) {
  const answer = [];
  let nums = numbers.split("");

  const isPrimeNumber = (num) => {
    if (num <= 1) return false;
    else {
      for (i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
      }
    }
    return true;
  };

  const Permutation = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        let newNum = fixed + arr[i];
        const newArr = [...arr];
        newArr.splice(i, 1);
        if (!answer.includes(+newNum) && isPrimeNumber(+newNum)) {
          answer.push(+newNum);
        }
        Permutation(newArr, newNum);
      }
    }
  };

  Permutation(numbers, "");
  console.log(answer.length);
  return answer.length;
}

const numbers = "17";

solution(numbers);
