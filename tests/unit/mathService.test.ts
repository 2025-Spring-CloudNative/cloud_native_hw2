import * as math from "../../src/math.service"

describe("Math Service - add", () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    it("should add two numbers", () => {
        const result = math.add(1, 2)
        expect(result).toBe(3)
    })
})
