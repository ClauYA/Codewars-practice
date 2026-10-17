
//an array of numbers
//output a unique number
//[ 3, 10, 3, 3, 3 ]), 10
//dos loop para comparar una posicion con la otra
function findUniq(arr) {
let obj={}
  for(let i=0;i<arr.length;i++){
   if(!obj[arr[i]]){
    obj[arr[i]] = 1
   }else{
    obj[arr[i]] += 1
   }
  }
   let min = Math.min(...Object.values(obj))  
    const valor = Object.keys(obj).find(key => obj[key] === min).toString();
  return Number(valor)
}
console.log(findUniq([ 1, 0, 0 ]))
console.log(findUniq([ 1, 0, 0 ]))
console.log(findUniq([ 0, 1, 0 ]))
console.log(findUniq([ 0, 0, 1 ]))
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 3, 10, 3, 3, 3 ]))