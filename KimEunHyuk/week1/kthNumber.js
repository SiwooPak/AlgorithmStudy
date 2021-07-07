function sort(array){
    for (let i=0; i<array.length-1;i++){
        for (let j=i+1; j<array.length;j++){
            if (array[j] < array[i]){
                let tmp = array[j];
                array[j] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}

function solution(array, commands) {
    let answer = [];
    
    for (let i=0; i<commands.length; i++){
        let arr = array.slice(commands[i][0]-1, commands[i][1]);
        arr = sort(arr);
        answer.push(arr[commands[i][2]-1]);
    }
    return answer;
}
