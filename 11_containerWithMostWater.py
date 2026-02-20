class Solution:
    def maxArea(self, heights: list[int]) -> int:
        left = 0
        right = len(heights) - 1
        max_area = 0

        while left < right:
            width = right - left
            height = min(heights[left], heights[right])
            area = width * height

            if area > max_area:
                max_area = area
            
            if heights[left] > heights[right]:
                right -= 1
            else:
                left += 1
        
        return max_area

solution = Solution()
print(solution.maxArea([1,8,6,2,5,4,8,3,7]))