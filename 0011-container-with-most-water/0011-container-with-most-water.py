class Solution:
    def maxArea(self, height: List[int]) -> int:

        # algorithm 
        # find container on each single i and make container
        # find width 
        # find find lowest hight
        # find area 
        # return maximum

        maxWaterContainer = 0
        left = 0
        right = len(height)-1

        while(left < right):

            width = right - left
            heights = min(height[left], height[right])
            area = width *heights
            maxWaterContainer = max(maxWaterContainer, area)

            # area = (right-lefft)*(min(height[left], height[right]))


            # move decide on smallest height
            if height[left]<height[right]:
                left+=1
            else:
                right-=1
        return maxWaterContainer
        



        