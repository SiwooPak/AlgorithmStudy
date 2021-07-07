let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

function solution(num) {
    answer = '';
    for (let i = 1; i <= num; i++) {
        answer += i + '\n'
    }
    return console.log(answer); 
}
solution(num);