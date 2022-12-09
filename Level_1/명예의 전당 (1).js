function solution(k, score) {
  var answer = [];
  let theHallOfFame = [];

  while (score.length) {
    if (theHallOfFame.length < k) {
      theHallOfFame.push(score.shift());
      answer.push(Math.min.apply(null, theHallOfFame));
      continue;
    }
    theHallOfFame.push(score.shift());
    theHallOfFame.sort((a, b) => a - b);
    theHallOfFame.shift();
    answer.push(Math.min.apply(null, theHallOfFame));
  }
  return answer;
}
