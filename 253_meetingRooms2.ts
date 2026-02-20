function minMeetingRooms(intervals: number[][]): number {
    const lines = sweepLine(intervals)
    const sums = prefixSum(lines)

    return Math.max(...sums)
}

function sweepLine(intervals: number[][]): number[] {
    const events: [number, number][] = []

    for (const interval of intervals) {
        events.push([1, interval[0]])
        events.push([-1, interval[1]])
    }

    return events
        .sort((a, b) => {
            if (a[1] !== b[1]) {
                return a[1] - b[1]
            }
            return a[0] - b[0]
        })
        .map((event) => event[0])
}

function prefixSum(lines: number[]): number[] {
    const sums: number[] = []
    let sum = 0

    for (const line of lines) {
        sum += line
        sums.push(sum)
    }

    return sums
}