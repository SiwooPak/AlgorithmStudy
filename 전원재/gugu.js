function gugu(num) {
    let result= ""
    for(let i=1; i<10; i++){
      output = num*i
    result += `${num}*${i}= ${num*i}`
    result += "\n"
    }  
    return result
  }
  gugu(5)