let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let year = Number(input);

function isLeapYear(year)
{
	if (year % 400 === 0)
		return true;
	else if (year % 100 === 0)
		return false;
	else if (year % 4 === 0)
		return true;
	else
		return false;
}

console.log(Number(isLeapYear(year)));
