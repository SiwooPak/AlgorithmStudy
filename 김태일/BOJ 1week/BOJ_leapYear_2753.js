let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let year = Number(input);

function solution(year) { 
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return 1
  } else {
    return 0
  }
};

console.log(solution(year));