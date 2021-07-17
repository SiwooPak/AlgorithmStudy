// 카펫
function solution(brown, yellow) {
    let answer = [0,0];
    let total = brown+yellow;

    for(let i=3; i<total/2; i++) {
        let len = total/i;

        if((i-2)*(len-2) === y) {
            let weight = Math.max(len,i);
            let height = Math.min(len,i);

            answer = [weight, height];
            break;
        }
    }
    return answer;
}