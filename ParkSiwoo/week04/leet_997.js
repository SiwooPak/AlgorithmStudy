/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(N, trust) {
    // 1인 경우는 바로 판사 
    if (N === 1) return 1;
    // 좋아요 수를 담을 배열
    const count = new Array(N).fill(0)
    
    for (let pair of trust) {
      // 구조분해 할당 
      const [a, b] = pair;
      // 0번째 인덱스는 1번째 인덱스를 신뢰하기 때문에 -1
      count[a - 1]--
      // 1번째 인덱스는 좋아요가 1증가
      count[b - 1]++
    }
    //[-1,-1,2]

    // 좋아요 배열을 순회해서 인덱스의 요소값, 좋아요의 숫자가 N-1 같다면 판사님!
    for (let i = 0; i < count.length; i++) {
      if (count[i] === N - 1) {
        return (i + 1)
      }
    }
    // 좋아요 숫자가 N-1만큼 없는 경우 이 마을엔 노판사!
    return -1
      
  };

  console.log(findJudge(3, [[1,3],[2,3]]));