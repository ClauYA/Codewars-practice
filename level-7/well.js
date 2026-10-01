//A wealthy client has forgotten the password to his business website,
//  but he has a list of possible passwords. His previous developer has 
// left a file on the server with the name password.txt. You open the 
// file and realize it's in binary format.
//Write a script that takes an array of possible passwords and a string 
// of binary representing the possible password. Convert the binary to a 
// string and compare to the password array. If the password is found, 
// return the password string, else return false (or NULL / null, 
// depending on the language).

function decodePass( passArr, bin )
{
  let arrayBin = bin.split(' ');
  console.log(arrayBin)
  for(let i=0;i<passArr.length;i++)
  {
    
  }
}
decodePass(['shb','dfdf'],'fdf wew wer')