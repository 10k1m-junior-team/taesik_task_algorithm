function solution(n, k) {
  var answer = 0;
  let changeNumber = n.toString(k).split("0");
  for (let i = 0; i < changeNumber.length; i++) {
    if (isPrime(changeNumber[i])) answer++;
  }
  return answer;
}

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}
