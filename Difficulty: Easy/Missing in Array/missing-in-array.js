/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    missingNum(arr) {
        // code here
          let n = arr.length + 1;
    let marker = new Array(n + 1).fill(0);

    // mark existing numbers
    for (let el of arr) {
        marker[el] = true;
    }

    // find the missing one
    for (let i = 1; i <= n; i++) {
        if (!marker[i]) return i;
    }
    
    
    }
}