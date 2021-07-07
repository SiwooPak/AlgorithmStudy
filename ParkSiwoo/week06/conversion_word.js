// 43163
// 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 
// 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.
// 규칙
// 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
// 2. words에 있는 단어로만 변환할 수 있습니다.
// target 단어가 배열 words에 없을시 리턴 0
// begin 단어를 큐에 집어넣고
// 다음 단어와 비교

function solution(begin, target, words) {
    // 단어가 없으니  변환 불가능 리턴 0
    if(!words.includes(target)) return 0;
    // 비교할 단어를 담을 배열
    let compare = new Array(begin);
    // 한글자씩 바뀌는 단어들을 담을 배열.
    let result = [begin];
    
    while(compare) {
        // 배열에서 비교할 단어 꺼내고
        let compare_word = compare.pop();
        // 단어의 집합인 배열의 각 요소를 반복해서 비교
        for(let word of words) {
            // 글자 차이 변수
            let diff = 0;
            for(let j=0; j<word.length; j++) {
                // 차이가 1보다 크면 멈춰~~
                if(diff > 1) break;
                // 글자 비교 다르면 diff up!
                if(word.charAt(j) !== compare_word.charAt(j)) diff++;
            }
            // 1글자 차이 나고
            if(diff === 1) {
                // 만약 target 과 같다면, result 배열에 담고, 그 배열의 길이-1을 리턴.
                if(target === word) {
                    result.push(word)
                    return result.length-1;
                }
                // 같지 않다면, 비교 배열에 담는다.
                compare.push(word); 
            }  
        }
        // 비교하는 단어, result에 담고
        result.push(compare_word);
    }  
}

let output = solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
console.log("output: "+output);