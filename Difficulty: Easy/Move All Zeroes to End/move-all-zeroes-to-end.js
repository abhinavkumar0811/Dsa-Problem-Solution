/**
 * @param {Number[]} arr
 * @returns {void}
 */

class Solution {
    pushZerosToEnd(arr) {
        // code here
        
        let count=0
        
        for(let read=0; read<arr.length; read++){
            
                if(arr[read] !==0){
                    
                    arr[count] = arr[read]
                    count++
                }
        }
        
        
        for(let rem=count; rem<arr.length; rem++){
            
            arr[count] = 0
            count++
        }
        
        return arr
        
    }
}