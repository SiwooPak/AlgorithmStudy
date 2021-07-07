// k번째수
// [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
// [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
// [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.
// commands [start,end,index] 배열의 인덱스 start-1~end까지 자르고
// 정렬한 다음에 index의 요소를 리턴.

function solution(array, commands) {
    
    let answer = commands.map(command => {
        const [start,end,index] = command;
        let sliceArr = array.slice(start-1,end).sort((a,b) => a-b);
        return sliceArr[index-1];
    })
    return answer;
}

let arr = [1, 5, 2, 6, 3, 7, 4];
let cmd = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(arr, cmd));