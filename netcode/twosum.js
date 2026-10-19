 twoSum(nums, target) {
        for(let i=0; i<nums.length; i++){
            for (let j=0;j<nums.length;j++){
                if(nums[i]+nums[j]==target && i!==j){
                    return [i,j]
                }
            }
        }
    }

twoSum([3,4,5,6],8)