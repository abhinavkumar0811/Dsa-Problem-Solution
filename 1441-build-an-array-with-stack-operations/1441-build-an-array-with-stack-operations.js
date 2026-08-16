var buildArray = function(target, n) {
    const result = [];
    let targetIndex = 0;

    for (let num = 1; num <= n; num++) {
        result.push("Push");

        if (num === target[targetIndex]) {
            targetIndex++;
        } else {
            result.push("Pop");
        }

        if (targetIndex === target.length) {
            break;
        }
    }

    return result;
};