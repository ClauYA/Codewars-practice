//PREP
// input a integer n 
//is it going to be bigger than 0?
// is it always an integer? what about if there is empty or string?
// is it going to be without decimals?
//output a string array call answer 
//first has to loop through the n
// if it divible by 3 && 5
//show FizzBuzz
//if it is divisble by 3
//shows fizz
// if it is diivible by 5
//shows buzz
// if is any number then has to show the index
function fizzbuzz(n){
    const cadenaArray = [];
    for(let i=1 ; i<=n ; i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            cadenaArray.push('FizzBuzz')
        }else if(i % 3 == 0){
            cadenaArray.push('Fizz')
        }else if(i % 5 == 0){
            cadenaArray.push('Buzz')
        }else{
            cadenaArray.push(i)
        }
    }
    return cadenaArray
}
console.log(fizzbuzz(10))