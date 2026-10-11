//PREP
//parameters: an array of string
//return: has to return an item from the array with the length of 4
//Example: ['claudia','matteo','leti','aylen']  print => leti
//Pseudocode: 
//foreach to to through every element
//if asking the element.length is menus <4 if yes print

function friend(friends){
  return friends.filter(name =>{
    if(name.length !== 4){
    }else{
        return []
    }
  } )

}

console.log(friend(["Jimmt", "Carit", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))