var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // normalize
    let result = new Array(n);

    for (let i = 0; i < n; i++) {
        let newIndex = (i + k) % n;
        result[newIndex] = nums[i];
    }

    // copy back in-place
    for (let i = 0; i < n; i++) {
        nums[i] = result[i];
    }
};
