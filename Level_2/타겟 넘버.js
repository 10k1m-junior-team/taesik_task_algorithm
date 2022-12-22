// function solution(numbers, target) {
//   let answer = 0;

//   dfs(0, 0);

//   function dfs(index, sum) {
//     if (index === numbers.length) {
//       console.log(index, sum, target);
//       if (sum === target) {
//         console.log("Catch");
//         answer++;
//       }
//       return;
//     }

//     dfs(index + 1, sum + numbers[index]);
//     dfs(index + 1, sum - numbers[index]);
//   }

//   return answer;
// }
// console.log(solution([1, 1, 1, 1, 1], 3));
let n = 78;


console.log(++n.toString(2).replace(/0/g, ""));
