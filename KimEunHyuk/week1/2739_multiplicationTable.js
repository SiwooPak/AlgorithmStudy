const fs = require('fs');
const input =  fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

// num을 인자로 넣으면 구구단의 num단을 출력
function doMultiply(num){

  // 반복하면서 num * i = (num*i) 형태로 출력
  for (let i=1; i<10; i++) {
    console.log(`${num} * ${i} = ${num*i}`);
  }
}

doMultiply(num);
