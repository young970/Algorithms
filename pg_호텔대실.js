function time_to_minutes(time) {
  const next = time.split(":");
  return Number(next[0]) * 60 + Number(next[1]) + 10;
}

function solution(book_time) {
  var answer = 0;
  book_time.sort();

  const room = [];

  book_time.forEach((t) => {
    const tem = t[0].split(":");
    const startTime = Number(tem[0]) * 60 + Number(tem[1]);
    const idx = room.findIndex((a) => a <= startTime);

    if (idx == -1) room.push(time_to_minutes(t[1]));
    else room[idx] = time_to_minutes(t[1]);
  });

  console.log(room.length);
  answer = room.length;
  return answer;
}

const book_time = [
  ["10:20", "12:30"],
  ["10:20", "12:30"],
  ["10:20", "12:30"],
];

solution(book_time);
