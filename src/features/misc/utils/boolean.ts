/**
 * 指定した確率でtrueを返す
 *
 * - 50 -> 50%の確率で true を返す
 * - 30 -> 30%の確率で true を返す
 */
export const makeTrueByPercentage = (truePercentage: number): boolean => {
  const clampedPercentage = Math.min(100, Math.max(0, truePercentage))
  return Math.random() * 100 < clampedPercentage
}
