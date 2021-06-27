function solution(n, results) {
    let answer = 0;
    let total = {}
    let front ={}
    let back ={}
    results.map(el=>{
        if(front[el[0]]===undefined){
            front[el[0]]=[]
        }
        front[el[0]].push(el[1])
    })
    results.map(el=>{
        if(back[el[1]]===undefined){
            back[el[1]]=[]
        }
        back[el[1]].push(el[0])
    })

    
    
    for(let a in front){
      for(let b in front){
        if(front[a].includes(parseInt(b))){
         front[a]= front[a].concat(front[b])
         front[a] = [...new Set(front[a])]
        }
      }
    }
    for(let a in back){
      for(let b in back){
        if(back[a].includes(parseInt(b))){
         back[a]= back[a].concat(back[b])
         back[a] = [...new Set(back[a])]
        }
      }
    }
   
    
    let winner =true
    let loser=true
while(winner){
  winner = false
    for(let a in front){
      if(front[a].length===n-1){
       
        answer++
        delete front[a]
        n=n-l
        winner = true
      }  
      
    }
}
    while(loser){
    for(let a in back){
      loser = false
      
      if(back[a].length===n-1){   
        answer++
        delete back[a]
        n = n-1
        loser = true
      }
    }
    }

    
    
    return answer;
}

console.log(solution(5,[[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]))


////// 플로이드 와샬 법
const solution =(n, results)=>{
  //결과에 대해 2차원 배열에 표기
  const graph =Array.from({length: n+1}, ()=> Array(n+1).fill(false));
  results.map((val)=>{
    graph[win][lose]=1
    graph[lose][win]=-1
    graph[win][lose]=0
    graph[lose][win]=0
  });

  const rangeN = [...Array(n).keys()].map((e)=> e+1)

  //플로이드 와샬 알고리즘
  for(const mid of rangeN){
    for(const a of rangeN){
      for(const b of rangeN){
        //a가 mid를 이기고, mid가 b를 이기면 a가 b를 이김
        if(graph[a][mid]===1 && graph[mid][b]===1) graph[a][b]=1
        ////a가 mid에게 지고, mid가 b에게 지면 a가 b에게 짐 
        if(graph[a][mid]===-1 && graph[mid][b]===-1) graph[a][b]=-1
      }
    }
  }
  // 경기 결과를 추측할 수 없는 경우는 false로 그대로 남아있음
  // 각 선수에 대해 false가 전혀 없는 경우만 ans +1
  let ans = 0;
  for(const self of rangeN){
    let hasFalse = false;
    for(const other of rangeN) {
      if(graph[self][other]===false){
        hasFalse = false
        break;
      }
    }
    ans += hasFalse ? 0:1
  }
  return ans
}