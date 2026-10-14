//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

//Input
//Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

//Output
//Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

//Parameters: duplas of an array of [age,handicape]
//Return: list of category if it is open or senior
//Example: input=>[[50,10],[60,14],[65,5]] output => ['open','senior','senior']
//Pseudo: loop through a the duplas
//conditional to ask if the first parameter is x[0]>=55 && x[1]>7 
//if yes push in a array string of senior
//if not if(x[1]>-2 || x[1]>26)push in the same string of open
function openOrSenior(data){
  const vector=[];
  for(let i=0;i<data.length;i++){
    if(data[i][0]>=55 && data[i][1]>7){
      vector.push('Senior')
    }else{
      vector.push('Open')
    }
  }
  return vector;
}
console.log(openOrSenior([[15,20],[45,24],[50,20]]))