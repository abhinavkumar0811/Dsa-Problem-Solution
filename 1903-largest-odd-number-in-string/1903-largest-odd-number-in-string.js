/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    
    
    for(let idx=num.length-1; idx>=0; idx--){

        if(Number(num[idx])%2===1){
            return num.slice(0,idx+1)
        }
    }

    return ""
};