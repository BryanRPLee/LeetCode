function minSubArrayLen(target: number, nums: number[]): number {
    let minLen = Number.POSITIVE_INFINITY
    const n = nums.length
    let right = 0
    let currentSum = 0

    for (let left = 0; left < n; left++) {
        while (right < n && currentSum < target) {
            currentSum += nums[right]
            right++
        }

        if (currentSum >= target) {
            minLen = Math.min(minLen, right - left)
        }

        currentSum -= nums[left]
    }

    return minLen === Number.POSITIVE_INFINITY ? 0 : minLen
}