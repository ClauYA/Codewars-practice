//2 inputs an array of numbers and a number
//find 2 different numbers than together is the target number
//output the indexes of this two numbers and the conmutation
// should be a tuple (index1,index2)

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}
twoSum([2, 2, 3], 4)