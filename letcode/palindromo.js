 //Paramenters: a integer 
 //Return if it is false or true when it is palindrome
 //Example: 46546 false; 48484 true
 //Pseudo: I can use the method reverse and compare with a conditional
var isPalindrome = function(x) {
   let y = parseInt(x.toString().split('').reverse().join(''))
   if(y==x){
    return true;
   }else{
    return false;
   }
};