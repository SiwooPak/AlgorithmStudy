let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.shift();

let stack = [];
let result = '';

input.map((el) => {
  let cmd = el.split(' ');

  let push = (value) =>
    !stack.length ? (stack[0] = value) : (stack[stack.length] = value);
  let pop = function () {
    if (!stack.length) {
      return `${-1}\n`;
    }
    let result = `${stack[stack.length - 1]}\n`;
    stack.length = stack.length - 1;
    return result;
  };
  let size = () => `${stack.length}\n`;
  let empty = () => (!stack.length ? `${1}\n` : `${0}\n`);
  let top = () => (!stack.length ? `${-1}\n` : `${stack[stack.length - 1]}\n`);

  switch (cmd[0]) {
    case 'push':
      push(cmd[1]);
      break;
    case 'pop':
      result += pop();
      break;
    case 'size':
      result += size();
      break;
    case 'empty':
      result += empty();
      break;
    case 'top':
      result += top();
      break;
    default:
      break;    
  }

});

return console.log(result);

// 이 쪽 코드는 코드 내용은 짧아졌지만, 메로리와 속도는 상대적으로 크고 느렸다.