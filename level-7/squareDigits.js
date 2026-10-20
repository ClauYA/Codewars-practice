function squareDigits(num){
  const vector = String(num).split('');
  let nuevo='';
  for(let i=0;i<vector.length; i++){
    nuevo+=Math.pow(vector[i],2)
  }
  return Number(nuevo);
}


console.log(squareDigits(3212))