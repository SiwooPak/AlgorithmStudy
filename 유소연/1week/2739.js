const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let num = Number(line)
  // n * 1 부터 n * 9까지 출력해야한다.
  // 반복문을 사용해 1-9까지 반복
  for (let i = 1; i < 10; i++) {
      console.log(num + ' * ' + i + ' = ' + num * i)
  }
  rl.close();
}).on("close", function() {
  process.exit();
});