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
