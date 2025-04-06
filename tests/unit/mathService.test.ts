import * as math from "../../src/math.service"

describe("Math Service - add", () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    it("should add two numbers", () => {
        const result = math.add(1, 2)
        expect(result).toBe(3)
    })

    it("should throw an error if any of the arguments is not a number", () => {
        expect(() => math.add(1, "2" as any)).toThrow("Both arguments must be numbers")
        expect(() => math.add("1" as any, 2)).toThrow("Both arguments must be numbers")
        expect(() => math.add("1" as any, "2" as any)).toThrow("Both arguments must be numbers")
        expect(() => math.add(1, null as any)).toThrow("Both arguments must be numbers")
    })
})
