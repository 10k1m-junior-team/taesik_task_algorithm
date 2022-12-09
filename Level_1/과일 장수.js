function solution(k, m, score) {
  var answer = 0;
  let idx = 0;
  let minSize = 0;
  score.sort((a, b) => a - b);
  while (score.length) {
    minSize = score.pop();
    idx++;
    if (idx === m) {
      answer += minSize * m;
      idx = 0;
    }
  }
  return answer;
}
