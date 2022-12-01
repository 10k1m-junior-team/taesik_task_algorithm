function solution(X, Y) {
  let xArray = new Array(10).fill(0);
  let yArray = new Array(10).fill(0);
  let answer = "";
  for (let i = 0; i < X.length; i++) {
    xArray[X[i] * 1]++;
    yArray[Y[i] * 1]++;
  }

  for (let i = xArray.length - 1; i > -1; i--)
    answer += i.toString().repeat(Math.min(xArray[i] * 1, yArray[i] * 1));

  if (answer === "") return "-1";
  if (answer * 1 === 0) return "0";
  return answer
    .split("")
    .sort((a, b) => b * 1 - a * 1)
    .join("");
}
