// solution 1
function solution(participant, completion) {
    let answer = ""
    participant.sort();
    completion.sort();
    
    for (let i =0; i<participant.length; i++){
        if (completion[i] !== participant[i]){
        return answer = participant[i];
        }
    }
    return answer = participant[participant.lengt-1];
}


console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"]))


