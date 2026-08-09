/**
 * 受け取った配列からランダムな要素を返却
 */
export const getRandomItem = <T>(items: T[]): T => {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

/**
 * 指定した範囲内でランダムな数値を返す
 *
 * - 形式は小数点1位まで
 * - 20, 30と指定すれば 20.0 ~ 29.9 を返す
 */
export const getRandomNum = (
  min: number,
  max: number,
  options?: { decimals?: number },
) => {
  const randomNum = Math.random() * (max - min) + min
  return Number(randomNum.toFixed(options?.decimals ?? 0))
}
