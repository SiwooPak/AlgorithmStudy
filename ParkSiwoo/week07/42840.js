// 모의고사
function solution(answers) {
    const answer = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    const cnt = [0,0,0];

    for(let i=0; i<answers.length; i++) {
        if(answer[0][i%5] === answer[i]) {
            cnt[0]++;
        }
        if(answer[i][i%8] === answer[i]) {
            cnt[1]++;
        }
        if(answer[i][i%10] === answer[i]) {
            cnt[2]++;
        }
    }

    let max = 0;
    let result = [];
    for(let j=0; j<cnt.length; j++) {
        if(cnt[j]>max) max=cnt[j]
    }

    for(let k=0; k<cnt.length; k++) {
        if(max === cnt[k]) result.push(k+1);
    }

    return result.sort();
}