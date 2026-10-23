//Paramenters array of numbers
//Return a phone number
//Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890"
//pseudo: crear una variable y empezar a concatenar 
function createPhoneNumber(numbers){
 let s= numbers.join("");
  return `(${s.slice(0, 3)}) ${s.slice(3, 6)}-${s.slice(6)}`;
}