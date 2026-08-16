var singleNonDuplicate = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Make mid even
        if (mid % 2 === 1) {
            mid--;
        }

        if (nums[mid] === nums[mid + 1]) {
            // Pair is correct, single element is to the right
            left = mid + 2;
        } else {
            // Pair is broken, single element is at mid or left
            right = mid;
        }
    }

    return nums[left];
};