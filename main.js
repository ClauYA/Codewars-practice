function past(h, m, s){
  
  s=s*1000
  m=m*60000
  h=h*3600000
  return s+m+h
}

function positiveSum(arr) {
    let sum=0;
  for (let i = 0; i < arr.length; i++) 
  {
    if (arr[i] > 0) 
    {  
      sum += arr[i];
    }
  }
  return sum;
}