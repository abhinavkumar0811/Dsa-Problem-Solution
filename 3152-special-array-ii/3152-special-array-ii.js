var isArraySpecial = function(nums, queries) {
    const n = nums.length;

    // bad[i] = true if nums[i] and nums[i-1]
    // have the same parity
    const bad = new Array(n).fill(false);

    for (let i = 1; i < n; i++) {
        if (nums[i] % 2 === nums[i - 1] % 2) {
            bad[i] = true;
        }
    }

    // Prefix sum of bad positions
    const prefix = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + (bad[i] ? 1 : 0);
    }

    const answer = [];

    for (const [from, to] of queries) {
        const badCount = prefix[to] - prefix[from];

        answer.push(badCount === 0);
    }

    return answer;
};