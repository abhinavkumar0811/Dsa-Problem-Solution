/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const result = new Array(nums.length);

    let positiveIndex = 0;
    let negativeIndex = 1;

    for (const num of nums) {
        if (num > 0) {
            result[positiveIndex] = num;
            positiveIndex += 2;
        } else {
            result[negativeIndex] = num;
            negativeIndex += 2;
        }
    }

    return result;
};