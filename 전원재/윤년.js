function Year(num){
    if(num>=1 && num<=4000){
    if((num%4===0 && num%100===0) || num%400===0){
        return 1
    }else {
        return 0
    }
}else {
    return 0
}
}
Year(2008)
