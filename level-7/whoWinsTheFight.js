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
  console.log('Antes de comparar:', sumLeft, sumRight);
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
//alphabetWar('wwwwww')