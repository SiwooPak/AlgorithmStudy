const allPathsSourceTarget = graph => {
    // 각 경로를 담아둘 배열
    let res = []
    // 경로를 담아둘 임시배열
    let path = []
    //시작 정점이 0이므로
    path.push(0)
  
    const dfs = vertexIndex => {
      // 요소와 그래프길이 -1이 같을 경우 와 다를 경우
      const isLastVertexIndex = vertexIndex === graph.length - 1
      // 요소 와 그래프길이-1이 같을 경우 
      if (isLastVertexIndex) {  
        // path 안에 있는 첫번째 요소를 res에 push  
        res.push(path.slice(0));
      // 다를 경우  
      } else {
        for (nextVertex of graph[vertexIndex]) {
          // 요소 push
          path.push(nextVertex)
          dfs(nextVertex)
          // path에 있던 내용 삭제
          // path = [0]인 상태
          path.pop()
        }
      }
    }
    dfs(0);
    return res
  }

  console.log(allPathsSourceTarget([[1,2],[3],[3],[]]));