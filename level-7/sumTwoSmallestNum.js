function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a, b) => a - b); 
 
  let sum = numbers[0]+numbers[1]
  return sum
}

sumTwoSmallestNumbers([3, 87, 45, 12, 7])