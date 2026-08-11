/**
 * 受け取った配列からランダムな要素を返却
 */
export const pickRandomItem = <T>(items: readonly T[]): T => {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}
