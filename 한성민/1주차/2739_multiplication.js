let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

function multiplicationTable(firstArg, secondArg = 0)
{
	while (secondArg++ < 9)
		console.log(`${firstArg} * ${secondArg} = ${firstArg * secondArg}`);
}

multiplicationTable(num);
