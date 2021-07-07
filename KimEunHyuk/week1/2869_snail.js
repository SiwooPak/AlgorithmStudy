const readLine = require('readLine');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function(line) => {
    input = line.split(' ').map((el) => parseInt(el));
  }).on('close', function() {
    process.exit();
});

function howManyDays(a, b, v){
  let day = 0;
  while (true){
    v -= a;
    if (v < 0){
      return day;
    }
    if (v === 0){
      day++;
      return day;
    }
    day++;
    v += b;
  }
}
console.log(howManyDays(input[0], input[1], input[2]);
