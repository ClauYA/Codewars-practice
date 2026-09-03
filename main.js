function past(h, m, s){
  
  s=s*1000
  m=m*60000
  h=h*3600000
  return s+m+h
}

function positiveSum(arr) {
    let sum=0;
  for (let i = 0; i < arr.length; i++) 
  {
    if (arr[i] > 0) 
    {  
      sum += arr[i];
    }
  }
  return sum;
}

function findSmallestInt(array)
{
  let smallest=array[0]
  for (let i = 0; i < array.length; i++)
  {
    if (array[i] < smallest)
    {
      smallest=array[i]
    }
  }
  return smallest;
}
console.log(findSmallestInt([3, 5, 2, 8, 1,2,6]))

function positiveSum(array) 
{
  let sum=0;
  for(let i=0; i<array.length; i++)
  {
    if(array[i]>0)
    {
      sum+=array[i];
    }

  }
  return sum;
}
console.log(positiveSum([1, -4, 7, 12]))

function solution(str){
  
  let cadena='';
  for(let i=str.length-1;i>=0;i--)
  {
    cadena+=str[i]
  }
  return cadena;
}
console.log(solution("world"))