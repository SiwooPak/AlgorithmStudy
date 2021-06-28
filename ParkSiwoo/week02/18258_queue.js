// 문제
// 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 여섯 가지이다.

// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(value) {
    //노드가 저장하는 값
    this.value = value;
    //대기열의 다음 노드에 대한 링크. 처음엔 노드가 없기에 null
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.first) { // 첫번째 노드가 있는 경우
      // last(rear) 뒤에 생성된 노드를 추가
      this.last.next = node;
      // 그 추가된 노드가 마지막 노드
      this.last = node;
    } else { // 대기열의 노드가 없는 겨우
      // 생성된 노드는 first(front)
      this.first = node;
      // 또한 생성된 노드는 last(rear)가 됨.
      this.last = node;
    }
    //그리고 길이 1 증가
    this.length++;
  }

  dequeue() {
    const temp = this.first;
    this.first = this.first.next;
    this.length--;

    return temp.value;
  }
  //front
  peek() {
    return this.first.value;
  }
  //rear
  back() {
    return this.last.value;
  }

  count() {
    return this.length;
  }
}

// 입력을 담아둘 input 빈 배열로 생성
let input = [];
let queue = new Queue();
let result = "";

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.forEach((str) => Function(QueueFunc(str)));
  console.log(result);

  function QueueFunc(str) {
    let thisCmd = str.split(" ");
    switch (thisCmd[0]) {
      case "push":
        queue.enqueue(thisCmd[1]);
        break;

      case "pop":
        result += (queue.count() > 0 ? queue.dequeue() : -1) + "\n";
        break;

      case "size":
        result += queue.count() + "\n";
        break;

      case "empty":
        result += (queue.count() === 0 ? 1 : 0) + "\n";
        break;

      case "front":
        result += (queue.count() > 0 ? queue.peek() : -1) + "\n";
        break;

      case "back":
        result += (queue.count() > 0 ? queue.back() : -1) + "\n";
        break;

      default:
        break;
    }
  }
  process.exit();
});
