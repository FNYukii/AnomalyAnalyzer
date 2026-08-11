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
  decimals?: 0 | 1 | 2,
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

/**
 * 数値の配列を割合の配列に変換する
 *
 * [50, 50, 25, 25] -> [25, 25, 12.5, 12.5]
 */
export const convertToPercentages = <T extends readonly number[]>(
  values: T,
): { [K in keyof T]: number } => {
  const sum = values.reduce((acc, val) => acc + val, 0)

  if (sum === 0) {
    return values.map(() => 0) as { [K in keyof T]: number }
  }

  return values.map((val) => Math.round((val / sum) * 100 * 10) / 10) as {
    [K in keyof T]: number
  }
}
