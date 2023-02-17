function solution(nums) {
  var answer = 0;
  let get_num = parseInt(nums.length / 2);
  const new_arr = [...new Set(nums)];
  if (new_arr.length <= get_num) {
    answer = new_arr.length;
  } else {
    answer = get_num;
  }

  console.log(answer);
  return answer;
}

const nums = [3, 1, 2, 3];

solution(nums);
