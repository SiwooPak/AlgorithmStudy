const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line', function(line){

    const number = Number(line);

    for (let i=1; i<=9; i++){
        console.log(`${line} * ${i} = ${line * i}`);
    }


}).on('close', function(){
    process.exit();
});