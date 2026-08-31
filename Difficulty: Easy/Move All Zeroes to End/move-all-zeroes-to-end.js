/**
 * @param {Number[]} arr
 * @returns {void}
 */

class Solution {
    pushZerosToEnd(arr) {
        // code here
        
        let write = 0
        for(let read=0; read<arr.length; read++){
            
            if(arr[read] !==0){
                arr[write] = arr[read]
                write++
            }
        }
        
        arr.fill(0, write, arr.length)
        return arr
        
    }
}