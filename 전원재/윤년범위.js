function Year(num, num2){
    let leapYears=[]
    for(let i=num; i<=num2; i++){
        if(i>=1 && i<=4000){
            if((i%4===0 && i%100!==0) || i%400===0){
                leapYears.push(i)
            }
        }
    }
    return leapYears
}
Year(1994, 2400) 