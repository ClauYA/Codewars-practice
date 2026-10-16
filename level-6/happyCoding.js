//Parameters: input is a string of two words
//Return: return a number 
//Example: 


function happyCoding(nickname){
  let nick=nickname.toLowerCase()
  const vectorhappy=nick.split(" ").includes('happy')
  const vectorcoding=nick.split(" ").includes('coding')
  if(vectorhappy && vectorcoding)
  {
    if(nick.indexOf('happy')<nick.indexOf('coding')){
       return 1
    }else{
      return 2
    } 
  }
  if(vectorcoding) return 3
  if(vectorhappy)
    return 4
  return 5
}
console.log(happyCoding("happy programmer"))