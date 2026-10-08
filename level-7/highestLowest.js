//this gives already a function i just need to changed the function sort
//for toSorted 
function highAndLow(numbers)
{
  let b=[]
  let arr=numbers.split(" ")
  b = arr.sort((a, b) => a - b);
  numbers=`${b[b.length-1]} ${b[0]}`
  return numbers
}


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))