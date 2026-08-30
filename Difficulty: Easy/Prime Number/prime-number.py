class Solution:
    def isPrime(self, n):
        # code here
        
        if n <= 1: return False
        
        for el in range(2, n):
            
            if(n%el==0): return False
        
        return True
            
        