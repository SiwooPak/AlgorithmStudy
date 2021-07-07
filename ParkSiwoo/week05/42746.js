// 가장 큰 수
// 문제 설명
// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고,
// 이중 가장 큰 수는 6210입니다.

// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를
// 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
function solution(numbers) {
  // 각 요소 문자열로 변환
  const mergeNumbers = numbers.map((number) => number.toString());
  // 내림차순 정렬
  // (6,10) => 106, 610 -> 610 
  // (10,2) => 210, 102 -> 210
  // (6,2) => 26, 62-> 62
  // ['6','2','10']
  // join("")로 배열은 문자열로 변환
  let answer = mergeNumbers.sort((a, b) => (b + a) - (a + b)).join("");
  // 만약 문자열이 '0000'인 경우 '0'으로 대체.
  return answer.replace(/^0+/, "0");
}

let numbers = [6, 10, 2];
solution(numbers);
numbers = [0,0,0,0];
solution(numbers);