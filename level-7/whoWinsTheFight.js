//Write a function that accepts fight string consists of only small letters and return who wins the fight. 
// When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

function alphabetWar(fight)
{
    let sumLeft=0
    let sumRight=0

  for(let i=0;i<fight.length;i++)
  {
    switch(fight[i])
    {
        case 'w':
          sumLeft+=4;
          break;
        case 'p':
          sumLeft+=3;
          break;
        case 'b':
          sumLeft+=2;
          break; 
        case 's':
          sumLeft+=1;
          break; 
        case 'm':
          sumRight+=4;
          break;
        case 'q':
          sumRight+=3;
          break;
        case 'd':
          sumRight+=2;
          break; 
        case 'z':
          sumRight+=1;
          break;
        default:
         break;
    }
   
  }
  if(sumLeft>sumRight)
  {
    return 'Left side wins!'
  }else if(sumLeft<sumRight){
    return 'Right side wins!'
  }else if(sumLeft===sumRight){
    return "Let's fight again!"
  }

}
console.log(alphabetWar('zbb'))
//highAndLow("1 2 3 4 5"); // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
function highAndLow(numbers)
{
  let b=[]
  let arr=numbers.split(" ")
  b = arr.sort();
  console.log(b)
  numbers=`${b[b.length-1]} ${b[0]}`
  return numbers
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))






//level 5 by mistake
//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//function domainName(url)
//{
//  let nombreI=url.indexOf('/')
//  let nombreF=url.indexOf('.')
//  console.log('indexof ini')
//  console.log(nombreI)
//  console.log('indexof fin')
//  console.log(nombreF)
//  let pal;
//  if(url[nombreI]==='/')
//  {
//    pal= url.slice(nombreI+1,nombreF)
//  }
 
//  let n;
//  for(let i=url[nombreI];i<url[nombreF];i++)
 // {
 //     n+=url[i]
 // }
//  console.log(n)
///}
//domainName("http:google.com")