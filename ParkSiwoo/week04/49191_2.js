// 참고: 동빈좌~~ https://www.youtube.com/watch?v=9574GHxCbKc&t=790s(플로이드 와샬)
// 플로이드 와샬 알고리즘은 모든 정점의 최단 경로
// 거쳐가는 v를 중심으로 처리
// if (출발~중간) + (중간~도착) < (출발~도착)
// (출발~도착) = (출발~중간) + (중간~도착)
// 모든 정점을 순회했다면 순위가 확정된거니까. 

function solution(n, results) {
    // 모든 경로의 최단거리가 정해진 노드의 수
    let result = 0;
    const row = n+1;
    const col = n+1; 

    // 2차원 배열 생성
    let arr = Array.from(Array(row),() => Array(col).fill(Infinity));
    // 자기 자신은 0
    arr.forEach((el, i) => {
        if(i>0)  arr[i][i] = 0;
    })
    
    // results 배열을 arr에 할당
    results.forEach(([x,y]) => arr[x][y] = 1);
   
    // (출발~중간) + (중간~도착) < (출발~도착)
    // (출발~도착) = (출발~중간) + (중간~도착)
    // 거쳐가는 노드
    for (let i = 1; i <= n; i++) {
        // 출발노드
        for (let j = 1; j <= n; j++) {
            // 도착 노드
            for (let k = 1; k <= n; k++) {
                if (arr[j][i] + arr[i][k] < arr[j][k]) 
                    arr[j][k] = 1;
            }
        }
    }

    // 가중치가 1인경우는 카운트 1증가, 그리고 총카운트가 n-1인 경우 result++
    for (let i = 1; i <= n; i++){
        let cnt = 0;
        for(var j = 1; j <= n; j++)
            if(arr[i][j] === 1|| arr[j][i] === 1)
                cnt++;
        if(cnt === n-1)
            result++;
    }
    return result;
}
let results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]
console.log(solution(5, results));

// results = [[3, 5], [4, 2], [4, 5], [5, 1], [5, 2]];
// console.log(solution(5, results));
