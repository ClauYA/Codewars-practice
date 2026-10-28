//Paramenters a string
//Return the character of the string incrementatly
//Example cwAt => accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//Pseudo loop through the string and add the character times the index+1
//loop 
// 
function accum(s) {
  let nuevo = s.toUpperCase();
  const vector=[];
  for(let i=0;i<nuevo.length;i++){
    if(i==0){
        vector.push(nuevo[i])
    }else{
        let cadena =''
        cadena +=nuevo[i].toUpperCase()
        cadena+=nuevo[i].toLowerCase().repeat(i)
        vector.push(cadena)
    }
  }
  return vector.join('-')
    
}
console.log(accum('claudia'))