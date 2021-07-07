// 요것은 문제 해석을 잘못 하여~ failed!
function solution(n, results) {
    let ranks = new Set();
   
    for(let i=0; i<results.length; i++) {
        ranks.add(results[i][0]);
        if(i === results.length-1) {
            ranks.add(results[i][1]);
        }    
    }
    
    return Array.from(ranks)[n-2];
    
}
let results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]
solution(5, results)