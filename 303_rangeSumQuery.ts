class NumArray {
    private nums: number[]

    constructor(nums: number[]) {
        this.nums = nums
    }

    public sumRange(left: number, right: number): number {
        const sums: number[] = [0]
        let sum = 0

        for (const num of this.nums) {
            sum += num
            sums.push(sum)
        }

        return sums[right + 1] - sums[left]
    }
}