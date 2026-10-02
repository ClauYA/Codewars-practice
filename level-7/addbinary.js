function addBinary(a,b) 
{
  const sum=a+b;
  if (sum < 256) {
    return Math.abs(sum).toString(2);
  }
  return 0;
}
console.log(addBinary(4,5))