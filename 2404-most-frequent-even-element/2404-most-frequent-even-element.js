var mostFrequentEven = function(nums) {
    let freq = new Map();


    for (let el of nums) {
        if (el % 2 === 0) {
            freq.set(el, (freq.get(el) || 0) + 1);
        }
    }

    if (freq.size === 0) return -1;

    let result = Infinity;
    let maxCount = 0;

   
    for (let [key, value] of freq) {
        if (value > maxCount || (value === maxCount && key < result)) {
            maxCount = value;
            result = key;
        }
    }

    return result;
};
