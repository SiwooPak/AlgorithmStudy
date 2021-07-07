const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let year = Number(line)
  // 400의 배수이거나(400의 배수는 4의 배수를 만족), 4의 배수이면서 100의 배수가 아닌 년도는 윤년
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    result = 1;
  } else {
    result = 0;
  }
  console.log(result);
  rl.close();
}).on("close", function() {
  process.exit();
});