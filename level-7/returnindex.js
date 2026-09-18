var searchInsert = function(nums, target) 
{
    nums.sort();
 
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target)
        {
            console.log(i)
        }else if(nums[i]<target && nums[i+1]>target)
        {
            console.log(i+1)
        }
    }

};
searchInsert([1,3,5,6],2)