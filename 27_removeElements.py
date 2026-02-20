class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        j = 0

        for i in range(len(nums)):
            if nums[i] != val:
                nums[j] = nums[i]
                j += 1

        return j

solution = Solution()
print(solution.removeElement([0,1,2,2,3,0,4,2], 2))