function productExceptSelf(nums: number[]): number[] {
    const n = nums.length
    const products: number[] = new Array(n)

    const leftProducts = prefixProductLeft(nums)
    const rightProducts = suffixProductRight(nums)

    for (let i = 0; i < n; i++) {
        products[i] = leftProducts[i] * rightProducts[i]
    }

    return products
}

function prefixProductLeft(nums: number[]): number[] {
    const n = nums.length
    const products: number[] = new Array(n)
    let product = 1

    for (let i = 0; i < n; i++) {
        products[i] = product
        product *= nums[i]
    }

    return products
}

function suffixProductRight(nums: number[]): number[] {
    const n = nums.length
    const products: number[] = new Array(n)
    let product = 1

    for (let i = n - 1; i >= 0; i--) {
        products[i] = product
        product *= nums[i]
    }

    return products
}