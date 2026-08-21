/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let arr = []

    let left =0
    let right = nums.length-1
    let update = nums.length-1

    while(left<=right){

        let leftVal = nums[left] * nums[left]
        let rightVal = nums[right] *nums[right]

        if(leftVal > rightVal){
            arr[update] = leftVal
            left++
            update--

            
        }else{
            arr[update] = rightVal
            right--
            update--
            
        }
    }

    return arr
};