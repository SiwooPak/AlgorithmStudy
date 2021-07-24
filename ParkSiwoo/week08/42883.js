// 큰수 만들기
function solution(number, k) {
  let answer = "";
  let s = [];

  [...number].forEach((num) => {
    while (k > 0 && s[s.length - 1] < num) {
      s.pop();
      k--;
    }
    s.push(num);
  });
  s.splice(s.length - k, k);
  answer = s.join("");
  return answer;
}
