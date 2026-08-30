class Solution {
    arraySum(arr) {
        // code here
        
        let sum = arr.reduce((sum, el)=>{
            
            return sum+el
            
        },0)
        
        return sum
    }
}