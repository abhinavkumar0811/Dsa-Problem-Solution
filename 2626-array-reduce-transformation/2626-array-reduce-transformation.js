/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {

    
    if(nums.length <=0){
        return init
    }

    let accumlator = init;

    for(let idx=0; idx<nums.length; idx++){
        accumlator = fn(accumlator, nums[idx])
    }
    return accumlator;
};

