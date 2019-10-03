import { PromotionCodes } from "./promotion-codes"

describe("PromotionCodes", () => {
  describe("isValid", () => {
    it("should reject if value is not equal to 9 characters", () => {
      expect(PromotionCodes.isValid(0)).toBe(false)
      expect(PromotionCodes.isValid(12345678)).toBe(false)
      expect(PromotionCodes.isValid(1234567890)).toBe(false)
      expect(PromotionCodes.isValid(123456789)).toBe(true)
    })
    it("should reject if value have more than 2 duplicates", () => {
      expect(PromotionCodes.isValid(1023406780)).toBe(false)
    })
    it("should reject if value is not divisible by 11", () => {
      expect(PromotionCodes.isValid(908140642)).toBe(false)
    })
  })
  describe("generate", () => {
    it("should return a value which can pass 'isValid' check", () => {
      expect(PromotionCodes.isValid(PromotionCodes.generate())).toBe(true)
    })
  })
  describe("generateBulk", () => {
    it("should generate array of values with given amount", () => {
      expect(PromotionCodes.generateBulk(10).length).toBe(10)
    })
  })
})
