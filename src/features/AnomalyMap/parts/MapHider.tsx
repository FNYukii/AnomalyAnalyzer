import { useEffect, useState } from 'react'
import clsx from 'clsx'

const COL_COUNT = 6
const ROW_COUNT = 6

const INTERVAL_DELAY = 10

const makeNumbers = (count: number): number[] => {
  return [...Array(count)].map((i) => i)
}

type Props = {
  className?: string
}

/**
 * 画面上を隠すセルが1つずつ消えていくグリッド
 */
export const MapHider = ({ className }: Props) => {
  const [numbers, setNumbers] = useState(makeNumbers(COL_COUNT * ROW_COUNT))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumbers((prev) => {
        return prev.slice(0, -1)
      })
    }, INTERVAL_DELAY)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div
      className={clsx(`grid`, 'rotate-180', className)}
      style={{
        gridTemplateColumns: `repeat(${COL_COUNT}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${ROW_COUNT}, minmax(0, 1fr))`,
      }}
    >
      {numbers.map(() => (
        <div className="bg-black" />
      ))}
    </div>
  )
}
