/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

// find the frequency 
// with the set
let frequency = new Map()

for(let el of nums){
    frequency.set(el, (frequency.get(el) ||0)+1)
}

let sum = 0
for(let [key, value] of frequency){

    if(value === 1){
        return key
    }
}

    
    
};