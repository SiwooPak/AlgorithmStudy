// n-1의 수와 count의 값이 값다면
function solution(n, results) {
    // 모든 경로의 최단거리가 정해진 노드의 수
    let result = 0;

    // 2차원 배열 생성
    let arr = Array.from(Array(n+1),() => Array(n+1).fill(Infinity));
    
    // results 배열을 arr에 할당
    results.forEach(([x,y]) => arr[x][y] = 1);
    
    // 각 경로의 가중치가 1이라면 1로 주는
    for (let i = 1; i <= n; i++)
        for (let j = 1; j <= n; j++)
            for (let k = 1; k <= n; k++)
                if (arr[j][i] === 1 && arr[i][k] === 1) arr[j][k] = 1;
    
    for (let i = 1; i <= n; i++){
        let cnt = 0;
        for(var j = 1; j <= n; j++)
            if(arr[i][j] === 1 || arr[j][i] === 1)
                cnt++;
        if(cnt === n-1)
            result++;
    }
    return result;
}
let results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]
console.log(solution(5, results));

results = [[3, 5], [4, 2], [4, 5], [5, 1], [5, 2]];
console.log(solution(5, results));
