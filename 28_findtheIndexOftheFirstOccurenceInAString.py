class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        left = 0
        tmp = ''

        for right in range(len(haystack)):
            if (tmp == needle):
                break

            tmp += haystack[right]

            if len(tmp) > len(needle):
                tmp = tmp[1:]
                left += 1
        return -1 if tmp != needle else left


solution = Solution()
print(solution.strStr('hello', 'll'))