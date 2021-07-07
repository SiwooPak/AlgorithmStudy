function solution(nums) {
    var answer = 0;
    let max = nums.length/2;
    let candidateList = [];
    
    for(let i = 0; i<nums.length;i++){
        if (candidateList.includes(nums[i])!==true) {
            candidateList.push(nums[i]);
        }
    }
    if(candidateList.length > max){
        return answer = max;
    }
    return answer = candidateList.length;
}