/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map();

   
    map.set(0, -1);

    let balance = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {

        
        if (nums[i] === 0) {
            balance--;
        } else {
            balance++;
        }

       
        if (map.has(balance)) {
            maxLength = Math.max(
                maxLength,
                i - map.get(balance)
            );
        } 
        else {
           
            map.set(balance, i);
        }
    }

    return maxLength;
};