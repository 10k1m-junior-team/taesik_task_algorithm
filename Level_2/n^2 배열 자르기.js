function solution(n, left, right) {
  var answer = [];
  let leftRange = Math.ceil((1 + left) / n);
  let rightRange = Math.ceil((1 + right) / n);
  while (leftRange <= rightRange) {
    answer = answer.concat(getMultidimensionalArray(leftRange, n));
    leftRange++;
  }
  return answer.slice(left % n, (left % n) + (right - left + 1));
}

function getMultidimensionalArray(order, n, left) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    if (order >= i) array.push(order);
    else array.push(i);
  }
  return array;
}
