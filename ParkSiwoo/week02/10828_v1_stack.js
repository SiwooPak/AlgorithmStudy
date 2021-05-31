// 문제
// 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 다섯 가지이다.

// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

// 다른 분들은 아마 배열의 메서드 사용하지 않고 할 것 같아서 생성자 생성시 index는 빼고 생성하고 배열의length속성만 이용해서
// 스택 구현해 봤습니다!
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

class Stack {
  // Stack클래스의 객체를 생성할 경우, 생성자를 이용해서 stack 의 기본값으로 빈 배열 생성.
  constructor() {
    this.stack = [];
  }
  // push는 마지막 요소를 추가한다.
  // 배열의 길이가 0 이면, 배열 [0]에 item 할당
  // 0보다 크다면 배열의 길이의 인덱스에 item 할당.
  push(item) {
    if (!this.stack.length) {
      this.stack[0] = item;
    } else {
      this.stack[this.stack.length] = item;
    }
  }
  // pop는 마지막 요소를 꺼내오고, 스택에서 사라짐.
  // 배열의 길이가 0인 경우 -1을 리턴
  // 배열의 길이가 0보다 크다면 result에 stack[길이-1]의 값을 할당
  // 그리고 배열의 길이를 -1만큼 감소
  // result 리턴
  pop() {
    if (!this.stack.length) {
      return `${-1}\n`;
    }
    let result = `${this.stack[this.stack.length - 1]}\n`;
    this.stack.length = this.stack.length - 1;
    return result;
  }

  // 배열의 사이즈는 배열의 길이로 구할수 있다.
  size() {
    return `${this.stack.length}\n`;
  }

  // 스택의 길이가 0이면 비어있는 경우 이기에 삼항 연산자를 써서
  // 배열의 길이가 0과 같다면 1, 아니면 0 리턴
  empty() {
    return !this.stack.length ? `${1}\n` : `${0}\n`;
  }

  // 가장 나중에 있는 인덱스 값 출력. 스택에 정수가 없는 경우 -1을 리턴
  top() {
    return !this.stack.length 
      ? `${-1}\n`
      : `${this.stack[this.stack.length - 1]}\n`;
  }
}

input.shift();
let stack = new Stack();
let result = '';

input.map((el) => {
  let cmd = el.split(' ');
  if (cmd.length === 2 && cmd[0] === 'push') {
    stack.push(cmd[1]);
  } else if (cmd[0] === 'pop') {
    result = result.concat(stack.pop());
  } else if (cmd[0] === 'size') {
    result = result.concat(stack.size());
  } else if (cmd[0] === 'empty') {
    result = result.concat(stack.empty());
  } else if (cmd[0] === 'top') {
    result = result.concat(stack.top());
  }
});
return console.log(result);


// 이 쪽 코드가 좀 더 적은 메모리랑 처리속도가 빨랐다.
