function solution(number, limit, power) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    if (getDivisorsCnt(i) > limit) {
      answer += power;
      continue;
    }
    answer += getDivisorsCnt(i);
  }
  return answer;
}

function getDivisorsCnt(num) {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (num / i != i) divisors.push(num / i);
    }
  }
  return divisors.length;
}
