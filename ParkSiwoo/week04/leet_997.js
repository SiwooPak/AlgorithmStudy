/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(N, trust) {
    const count = new Array(N).fill(0)
    
    for (let pair of trust) {
      const [a, b] = pair;
      count[a - 1]--
      count[b - 1]++
    }
    
    for (let i = 0; i < count.length; i++) {
      if (count[i] === N - 1) {
        return (i + 1)
      }
    }
  
    return -1
      
  };