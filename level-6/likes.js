//PREP
//Parameters: there is an input of array of  names
//Return: return if the array is emtpy message no one likes this and the more people you change the message
//Example: ["Max", "John", "Mark"] ===> Max, john, and mark like this
// Pseudocode
//if the array.length==0 yes: message no one likes this
//if not array.length==1 yes: array[0] likes this
//if not array.length==2 yes: array[0] and array[1] likes this
//if not array.length==3 yes: array[0],array[1] and array[2] likes this
//if not arrray.length>=4 yes: array[0], array[1] and array.length-2 likes this
function likes(names =[]) {
    // console.log(names.length)
    if(names.length>=4){
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }else{
        switch(names.length){
    case 0:
        return'no one likes this';
    
    case 1:
        return`${names[0]} likes this`
  
    case 2:
        return `${names[0]} and ${names[1]} like this`
 
    case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
  
    }
    }
}
console.log(likes(['Max', 'John', 'Mark','jfdf']))