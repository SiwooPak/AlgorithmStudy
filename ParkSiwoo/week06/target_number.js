let answer = 0;

const dfs = (numbers, target, sum, idx) => {
    if(idx === numbers.length){
        if(sum==target) answer++;
        return;
    }
    dfs(numbers,target,sum+numbers[idx],idx+1);
    dfs(numbers,target,sum-numbers[idx],idx+1);
}

function solution(numbers, target) {
    dfs(numbers,target,0,0);

    return answer;
}
