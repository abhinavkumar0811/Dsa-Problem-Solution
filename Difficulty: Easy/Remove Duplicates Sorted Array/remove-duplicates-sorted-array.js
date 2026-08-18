class Solution {
    removeDuplicates(arr) {
        // code here
        
        if(arr.length ===1) return arr;
        
        
    //   sorted arr so 1 is always unique
    let write =1;
    
    for(let read=1; read<arr.length; read++){
        
        // compare on reach and every adject if not same then update the write pointer
        
        if(arr[read] !== arr[write-1]){
            
            // let temp = arr[read]
            arr[write] = arr[read]
            write++
            
        }
        
        
    }
    
    
    arr.length = write
    return arr
    }
}
