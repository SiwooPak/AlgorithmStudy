// 나의 h는 어떻게 구할 수 있을까? 
// 우측의 표와 같이 자신이 저널에 등재한 전체 논문중 많이 인용된 순으로 정렬한 후, 
// 피인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자가 바로 나의 h가 됩니다. 
// 이 표에서는 10이 H-지수가 되는 것입니다. 
// 다시 말하여, 이 연구원은 논문 인용횟수가 10이 넘는 논문이 적어도 10편이 된다는 것을 의미합니다.

// h-index
function solution(citations) {
    // 인용횟수를 담은 배열의 길이
    let len = citations.length;
    // 그 배열의 요소를 오름차순 정렬
    let sortedCiations = citations.sort((a,b) => a-b);
    
    // 그 배열의 길이까지 반복해서 요소의 값이 h-index 크거나 같을 경우 리턴
    // 여기서 h-index는 논문의 수
    for(let i=0; i<len; i++) {
        let h_index = len - i;
        if(sortedCiations[i] >= h_index) return h_index;
    }
    // h-index가 없는 경우 0 리턴
    return 0;
}
console.log(solution([3,0,6,1,5]));