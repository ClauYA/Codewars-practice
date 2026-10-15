//Parameters: the input is two ranges a and b, if the input is not a number print a empty list[]
//Return: a list of numbers that accomplished the eureka
//Example:(50, 150), [89, 135]
//Pseudo:
//conditional that a and b are numbers
//if not: print array[]
//if yes: 
//a loop from a to b
//convertir a en array y separarlo
//loop in the array donde se separa el primer input y se acumula en una variable+=array[i].pow(i+1)
//if condicion si a es igual a la variable acumulable\
//if yes manda a un array if not just return

function sumDigPow(a, b) {
  const vector=[];
  
  if(typeof a !== "number" && typeof b !== "number") return vector

    for(let i = a ; i <= b ; i++){
        const dig = String(i)
        let suma=0;
            for(let j=0;j<dig.length;j++){
                // console.log(`${dig[j]}sss`)
                suma+=Math.pow(Number(dig[j]),j+1)
               // console.log(`${y} total`)
            }
        if(i==suma)
            vector.push(i)
    }
    return vector
  
}
console.log(sumDigPow(50,90))