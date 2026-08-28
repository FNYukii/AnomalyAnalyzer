/**
 * 指定した範囲内でランダムな数値を返す
 *
 * - optionsで小数点何位まで表示するか指定できる (切り捨て)
 * - 20, 30 と指定すれば 20 ~ 29を返す
 * - 20, 30, 1と指定すれば 20.0 ~ 29.9 を返す
 */
export const makeRandomNum = (
  min: number,
  max: number,
  decimals: 0 | 1 | 2 = 0,
) => {
  const randomNum = Math.random() * (max - min) + min

  if (decimals === 1) {
    return Math.floor(randomNum * 10) / 10
  }

  if (decimals === 2) {
    return Math.floor(randomNum * 100) / 100
  }

  return Math.floor(randomNum)
}
