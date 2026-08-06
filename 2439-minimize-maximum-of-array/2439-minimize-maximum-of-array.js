/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let prefix = 0;
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i];

        let need = Math.floor((prefix + i) / (i + 1));
        ans = Math.max(ans, need);
    }

    return ans;
};