let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// 문제
// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

// 입력
// 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.

// 출력
// 출력형식과 같게 N*1부터 N*9까지 출력한다.

let n = Number(input); 

function gugu(n) {
    //입력받은 숫자가 1<=n<=9 이여야 함.
    if(n>=1 && n<=9) {
        for(let i=1; i<=9; i++) {
            console.log(`${n} * ${i} = ${n*i}`)
        }
    } else {
        return console.log("n은 1보다 크거나 같고, 9보다 작거나 같다.")
    }

}

gugu(7);