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
 * - optionsで小数点何位まで表示するか指定できる (切り捨て)
 * - 20, 30, 0と指定すれば 20 ~ 29を返す
 * - 20, 30, 1と指定すれば 20.0 ~ 29.9 を返す
 */
export const getRandomNum = (
  min: number,
  max: number,
  options?: { decimals?: 0 | 1 },
) => {
  const randomNum = Math.random() * (max - min) + min

  if (options?.decimals === 1) {
    return Math.floor(randomNum * 10) / 10
  }

  return Math.floor(randomNum)
}
