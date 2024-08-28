

let getLucky = function (s, k) {
  let string = "";

  for (let i = 0; i < s.length; i++) {
    string += s.charCodeAt(i) - 96;
  }
  let arr = string.split("").map(Number);
  let sum = 0;
  let i = 0;
  for (let i = 1; i < k; i++) {
    arr = arr.reduce((acc, value) => acc + value, 0);
    arr = arr.toString().split("").map(Number);
  }
  return arr.reduce((acc, value) => acc + value, 0);
};

let s = "iiii";
let k = 1;

let res = getLucky(s, k);
console.log(res); 
// The operations are as follows:
// - Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
// - Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
// Thus the resulting integer is 36.


let  s2 = "leetcode", k2 = 2
let res2 = getLucky(s2, k2);
console.log(res2); 
// The operations are as follows:
// - Convert: "leetcode" ➝ "(12)(5)(5)(20)(3)(15)(4)(5)" ➝ "12552031545" ➝ 12552031545
// - Transform #1: 12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33
// - Transform #2: 33 ➝ 3 + 3 ➝ 6
// Thus the resulting integer is 6.











