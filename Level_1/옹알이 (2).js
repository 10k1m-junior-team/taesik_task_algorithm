function solution(babbling) {
  var answer = 0;
  for (let i = 0; i < babbling.length; i++) {
    if (isFourPronunciations(babbling[i])) answer++;
  }
  return answer;
}

function isFourPronunciations(str) {
  let dict = { a: "aya", y: "ye", w: "woo", m: "ma" };
  let before = "";
  for (let i = 0; i < str.length; ) {
    if (
      str[i] in dict &&
      dict[str[i]] === str.slice(i, i + dict[str[i]].length)
    ) {
      if (before === str.slice(i, i + dict[str[i]].length)) return false;

      before = str.slice(i, i + dict[str[i]].length);
      i += dict[str[i]].length;
    } else return false;
  }
  return true;
}
