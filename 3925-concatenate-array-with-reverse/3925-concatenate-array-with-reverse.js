/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    

    let arr = [...nums]
    
    for(let idx=nums.length-1; idx>=0; idx--){

        arr.push(nums[idx])
    }

    return arr
};