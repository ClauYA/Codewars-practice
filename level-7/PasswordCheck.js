//A wealthy client has forgotten the password to his business website, but he has a list of possible passwords. 
// His previous developer has left a file on the server with the name password.txt. You open the file and realize it's in binary format.

//Write a script that takes an array of possible passwords and a string of binary representing the possible password. Convert the binary to a string and compare to the password array. 
// If the password is found, return the password string, else return false (or NULL / null, depending on the language).
function decodePass( passArr, bin ){
  let palabra=''
  bin.split(' ').forEach((binary) => {
    console.log(binary);
    binary = parseInt(binary, 2);
    binary.toString(10);
   console.log(String.fromCharCode(binary));
   palabra+=String.fromCharCode(binary); 
  })
  if(passArr.includes(palabra)){ return palabra}else{  return false}
    
 
}
decodePass(["k9rnR5zS","Qj0EYhHElQr0","5Ub64AVHElND","wdNwPgXShsbX7","os6f6cy3D6z2"], '1011001 110101 110000 1011000 1011000 1001010 1000110');