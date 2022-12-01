var arr = ["A", "B", "B", "C", "D"];
var count = 0;

for (let loop = 0; loop < arr.length; loop++) {
  if (arr[loop] === "B") {
    count++;
  }
}
console.log(`count : ${count}`);
let n = 9;
let arr1 = new Array(n + 1);
console.log(arr1.length);
for (let i = 0; i < arr1.length; i++) {
  arr1[i] = i;
}
console.log(arr1);
