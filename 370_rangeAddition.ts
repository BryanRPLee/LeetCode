type Update = [number, number, number]

function getModifiedArray(length: number, updates: Update[]): number[] {
    const modifiedArray: number[] = new Array<number>(length).fill(0)

    for (const update of updates) {
        const startIndex = update[0]
        const endIndex = update[1]
        const increment = update[2]

        for (let i = startIndex; i <= endIndex; i++) {
            modifiedArray[i] += increment
        }
    }

    return modifiedArray
}

console.log(getModifiedArray(5, [[1,3,2],[2,4,3],[0,2,-2]]))