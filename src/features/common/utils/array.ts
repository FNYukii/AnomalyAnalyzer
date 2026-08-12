import { makeRandomNum } from './number'

/**
 * 受け取った配列からランダムな要素を返却
 */
export const pickRandomItem = <T>(items: readonly T[]): T => {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

/**
 * 受け取った配列から、指定された数の要素をランダムに返却
 */
export const pickRandomItems = <T>(items: readonly T[], count: number): T[] => {
  // パターン1: 配列が空 or 指定個数が0以下の場合
  if (items.length === 0 || count <= 0) {
    return []
  }

  // パターン2: 要求個数が配列要素数を超えている場合、シャッフルして返す
  if (count >= items.length) {
    const shuffled = [...items]

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    return shuffled
  }

  // パターン3: 引数の問題が無い場合、指定個数分だけ取り出す
  const pool = [...items]
  const result: T[] = []

  for (let i = 0; i < count; i++) {
    const randomIndex = makeRandomNum(0, pool.length)
    const [selectedItem] = pool.splice(randomIndex, 1)

    result.push(selectedItem)
  }

  return result
}
