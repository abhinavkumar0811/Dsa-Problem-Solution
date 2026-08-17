/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let currentSum = nums.reduce((acc, el) => acc+ el,0)
    
    let n = Math.max(...nums)

    let expSum = 0;
    for(let i =0; i<=nums.length; i++){

        expSum +=i

    }

    
    let returnEl = expSum - currentSum
    return returnEl
    
};