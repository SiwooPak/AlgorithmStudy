let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);


function solution(num) {
    let sum = 0;
    for (let i = 1; i < 10; i++) {
        sum = i * num  
        console.log(`${num} * ${i} = ${sum}`);
  }  
};
  
solution(num);