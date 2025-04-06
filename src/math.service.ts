export function sumArray(array: number[]) {
    return array.reduce((acc, cur) => add(acc, cur), 0)
}

export function add(a: number, b: number) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both arguments must be numbers")
    }

    return a + b
}
