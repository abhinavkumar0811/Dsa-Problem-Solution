/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    
    for(let idx=0; idx<nums.length; idx++){

        if(nums[idx]%2 === nums[idx-1]%2){
            return false
        }
        
    }

    return true
};