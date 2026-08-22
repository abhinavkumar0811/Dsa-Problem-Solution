class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:

        # two pointer 
        # find square of each element
        # compare based sorting

        arr = [0] * len(nums)
        left = 0
        right = len(nums)-1
        k = len(nums)-1


        while(left <= right):

            lv = nums[left] * nums[left]
            rv = nums[right] * nums[right]

            # compare based sorting

            if(lv < rv):
                arr[k] = rv
                right-=1
            else:
                arr[k] = lv
                
                left+=1
            k-=1
        return arr
        