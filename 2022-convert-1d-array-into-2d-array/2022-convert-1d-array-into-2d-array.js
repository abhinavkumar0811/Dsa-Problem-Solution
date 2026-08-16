/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (m * n !== original.length) {
        return [];
    }

    const result = [];

    for (let i = 0; i < m; i++) {
        const row = [];

        for (let j = 0; j < n; j++) {
            row.push(original[i * n + j]);
        }

        result.push(row);
    }

    return result;
};