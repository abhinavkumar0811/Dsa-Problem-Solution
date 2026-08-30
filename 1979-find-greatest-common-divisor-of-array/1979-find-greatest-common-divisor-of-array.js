/**
 * @param {number[]} nums
 * @return {number}
 */

 var gcd = function(a,b){

    while(b!==0){

        let temp = b
          b= a%b
          a= temp
        
    }

    return a

    
 }



 
var findGCD = function(nums) {

    let small = Math.min(...nums)
    let largest = Math.max(...nums)

    return gcd(small, largest)
    
};