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

function solution(numbers) {
    let answer = [];
    let newNum = [];
    newNum.push(numbers[0]+numbers[1]);
    
    for (let i=0; i<numbers.length; i++){
        for (let j=i+1; j<numbers.length; j++){
            let tf = false;
            for (let k=0; k<newNum.length;k++){
                if (newNum[k] === numbers[i]+numbers[j]){
                    tf = true;
                }
            }
            if (!tf){
                newNum.push(numbers[i]+numbers[j]);
            }
        }
    }
    answer = sort(newNum);
    
    return answer;
}
