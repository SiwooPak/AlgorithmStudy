// 문제 설명
// n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 
// 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 
// 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

// 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 
// 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

// 너비 우선 탐색(BFS)
const bfs = ((arr,start,end) => {
    let visited=new Array(end+1);
    let level=new Array(end+1);
    let queue=[start];

    level[0]=0;
    level[start]=0;
    visited[start]=true;
    let lev;
    while( queue.length){
        
        let node = queue.shift()
        lev = level[node]+1
        for( let edge of arr){
            if(edge[0]==node && visited[edge[1]]==undefined) {
                queue.push(edge[1])
                visited[edge[1]]=true
                level[edge[1]]=lev
            }
            else if(edge[1]==node && visited[edge[0]]==undefined) {
                queue.push(edge[0])
                visited[edge[0]]=true
                level[edge[0]]=lev
            }
        }
    }
    return level.filter( (i) => i === lev-1 ).length
})

function solution(n, edge) {
    return bfs(edge,1,n);
}