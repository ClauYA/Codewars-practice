//Parameters: is a sentence of strings and a single letter not space and lowercase > 3
//Return: replace it with the the single letter
//Example: 'great job go ahead', 'k' => 'grekt job go khekd'
//Pseudo:  
//loop throught the string and find the letter that is most used and save it in a variable
//

function replaceCommon(string, letter) {
  let obj={}, count=1
  for(let i=0;i<string.length; i++){
    if(string[i]!==' '){
        if(!obj[string[i]])
        {
            obj[string[i]] = count
        }else{
            obj[string[i]] += count
        }
    }
  }
    console.log(obj)
    let max = Math.max(...Object.values(obj))  
    const clave = Object.keys(obj).find(key => obj[key] === max);
    const indice = Object.keys(obj).findIndex(key => obj[key] === max);
    console.log(`max ${max}`)
    console.log(indice)
    console.log(clave)
    console.log(max)
    let nuevo=''
    nuevo=string.replaceAll(clave,letter)
    console.log(nuevo)
    
}
 replaceCommon('my o loves me as never did', 't')