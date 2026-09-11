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

function reverseString(str){
  
  let cadena='';
  for(let i=str.length-1;i>=0;i--)
  {
    cadena+=str[i]
  }
  return cadena;
}
console.log(reverseString("world"))
//split string
function solution(str)
{
  let arr=[]
  if(str.length%2===0)
  { 
    for(let i=0;i<str.length;i++)
    {
      arr.push(`${str[i]}${str[i+1]}`)
      i++;
    }
    return arr;
  }else{
    str+='_'
    if(str.length%2===0)
    { 
      for(let i=0;i<str.length;i++)
      { 
        arr.push(`${str[i]}${str[i+1]}`)
        i++;
      }
      
    return arr;
    }
  }
}
console.log(solution('caden'))

//Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//Lets improve the time
function disemvowel(str) 
{
  let nuevo=""
  for(let i=0;i<str.length;i++)
  {
    if(str[i]!=='a' && str[i]!=='e' && str[i]!=='i' && str[i]!=='o' && str[i]!=='u' && str[i]!=='A' && str[i]!=='E' && str[i]!=='I' && str[i]!=='O' && str[i]!=='U')
    {
      nuevo+=str[i]
    }
  }
  return nuevo
}
console.log(disemvowel("This website is for losers LOL!"))
//figure it out what is wrong with this code
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}
console.log(getPlanetName(1))

//String to an array
function stringToArray(string)
{

  const array=string.split(" ")
  return array
}
console.log(stringToArray("hola como estas"))

//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
//Can you help her?
function greet(name)
{
  if(name === "Johnny"){
    return "Hello, my love!";
  }else{
    
  return "Hello, " + name + "!";
  }
    
}