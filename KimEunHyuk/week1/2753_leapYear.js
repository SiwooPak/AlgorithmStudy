const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let year = Number(input);

function isLeapYear(year){
  let bool = 0;
  // 4의 배수인 경우 윤년
  if (year % 4 === 0) {
    bool = 1;
  }
  // 100의 배수인 경우 윤년 x
  if (year % 100 === 0) {
    bool = 0;
  }
  // 400의 배수인 경우 윤년
  if (year % 400 === 0) {
    bool = 1;
  }
  return bool;
}
console.log(isLeapYear(year));
