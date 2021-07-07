
function solution(l,r){
    
    let currentMax = 0, answer = "";
    const obj = {}
    let targetStr = "AAAAABBBBBBCDDEFIJLMPQRSTUVWYZ"
    let answerStr = targetStr.slice(l-1,r-1)

    for (let i of answerStr){
        obj[i] = obj[i]?  obj[i] + 1 : 1;    
        if (obj[i] > currentMax){
            currentMax = obj[i];
            answer = i;
        }
    }

    return answer;
}




// let set = {}
// let string = "ABCDEFGHIJAAABBBCCCDDDKLMNOPQRUTUVWXYZ"


// for (let i of string){
//     console.log(set[i])
//     if(set[i]){
//         set[i] += 1
//     }
//     else{
//         set[i] = 1
//     }
// }

// console.log(set)