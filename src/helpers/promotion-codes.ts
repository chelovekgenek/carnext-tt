export class PromotionCodes {
  private static LENGTH = 9
  private static DIVIDER = 11
  private static MAX_DUPLICATES = 2

  private static includesDuplicates(array: string[]): boolean {
    return array.some((item, i) => {
      for (let j = 0, amount = 1; j < array.length; j++) {
        if (i === j) {
          continue
        }
        if (item === array[j]) {
          amount++
        }
        if (amount > PromotionCodes.MAX_DUPLICATES) {
          return true
        }
      }
      return false
    })
  }

  static generate(): number {
    let result = 0
    do {
      result = Number(String(Math.random()).substring(2, PromotionCodes.LENGTH + 2))
    } while (!PromotionCodes.isValid(result))
    return result
  }

  static generateBulk(amount: number): number[] {
    return new Array(amount).fill(0).map(() => PromotionCodes.generate())
  }

  static isValid(num: number): boolean {
    const numbers = String(num).split("")
    if (numbers.length !== PromotionCodes.LENGTH || PromotionCodes.includesDuplicates(numbers)) {
      return false
    }
    return (
      (Number(
        numbers.reduce(
          (prevVal, currVal, currIndex) => Number(currVal) * (PromotionCodes.LENGTH - currIndex) + prevVal,
          0,
        ),
      ) /
        PromotionCodes.DIVIDER) %
        1 ===
      0
    )
  }
}
