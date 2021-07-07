function solution(s) {
    let answer = '';
    let halfLen = parseInt(s.length/2);
    if (s.length % 2 === 1){
        answer = s[halfLen];
    } else {
        answer = s[halfLen-1]+s[halfLen];
    }
    return answer;
}
