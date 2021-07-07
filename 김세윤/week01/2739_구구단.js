var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var number = parseInt(input[0]);

// 입력받은 숫자의 구구단을 N*1부터 N*9까지 출력
for(let i = 1; i <= 9; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}