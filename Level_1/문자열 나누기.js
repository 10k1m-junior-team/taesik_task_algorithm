function solution(s) {
  var answer = 0;
  let xCnt = 0;
  let nonXCnt = 0;
  let idx = 0;
  console.log(s);
  while (s) {
    if (s[0] === s[idx]) {
      idx++;
      xCnt++;
    } else {
      idx++;
      nonXCnt++;
    }
    if (nonXCnt === xCnt) {
      answer++;
      s = s.slice(idx + 1, s.length);
      idx = 0;
    }
  }

  return answer;
}
