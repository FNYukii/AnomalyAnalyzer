/**
 * 受け取った配列からランダムな要素を返却
 */
export const getRandomItem = <T>(items: T[]): T => {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}
