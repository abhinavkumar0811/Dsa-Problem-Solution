/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    // let newString = s.split().reverse().join('')    
    // return newString

    let newString = s.trim().split(/\s+/)

    let left=0;
    let right=newString.length-1

    while(left<right){

        let temp= newString[left]
        newString[left] = newString[right]
        newString[right] = temp

        left++
        right--
    }


    return newString.join(' ')
};