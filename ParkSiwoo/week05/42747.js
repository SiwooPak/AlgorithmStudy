// 나의 h는 어떻게 구할 수 있을까? 
// 우측의 표와 같이 자신이 저널에 등재한 전체 논문중 많이 인용된 순으로 정렬한 후, 
// 피인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자가 바로 나의 h가 됩니다. 
// 이 표에서는 10이 H-지수가 되는 것입니다. 
// 다시 말하여, 이 연구원은 논문 인용횟수가 10이 넘는 논문이 적어도 10편이 된다는 것을 의미합니다.

function solution(citations) {
    let answer = 0;
    let len = citations.length;
    let sortedCiations = citations.sort((a,b) => a-b);
    
    for(let i=0; i<len; i++) {
        let h_index = len - i;
        if(sortedCiations[i] >= h_index) {
            answer = h_index;
            break;
        }
    }
    
    return answer;
}