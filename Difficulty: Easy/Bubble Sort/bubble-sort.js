/**
 * @param {number[]} arr
 */
class Solution {
    bubbleSort(arr) {
        // code here
        
        // algo -  compare each adject element and move to the next if  lar then first swap
        
        for(let i=0; i<arr.length-1; i++){
            
            // bubble algorithm say that  it each  push the lkarget elemebt to the end through transversal
            
            for(let j=0; j<arr.length-i-1; j++){
                
                if(arr[j] > arr[j+1]){
                    
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
        }
        
        return arr
    }
}