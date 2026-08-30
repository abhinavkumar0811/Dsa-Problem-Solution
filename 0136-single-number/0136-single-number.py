class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        freq = {}

        for el in nums:
            freq[el] = freq.get(el, 0)+1

        for el in freq:

            if freq[el] == 1: return el