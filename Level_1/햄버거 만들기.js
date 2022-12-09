function solution(ingredient) {
  var answer = 0;
  let temp = [];
  for (let i = 0; i < ingredient.length; i++) {
    temp.push(ingredient[i]);
    if (temp.slice(temp.length - 4, temp.length).join("") === "1231") {
      for (let i = 0; i < 4; i++) {
        temp.pop();
      }
      answer++;
    }
  }
  return answer;
}
