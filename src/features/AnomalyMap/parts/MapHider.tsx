import { useEffect, useState } from 'react'
import clsx from 'clsx'

const COL_COUNT = 6
const ROW_COUNT = 6

const INTERVAL_DELAY = 10

const makeHideFlags = (flagCount: number) => {
  return [...Array(flagCount)].map(() => true)
}

type MapHiderProps = {
  className?: string
}

/**
 * 画面上を隠すセルが1つずつ消えていくグリッド
 */
export const MapHider = ({ className }: MapHiderProps) => {
  const [hideFlags, setHideFlags] = useState(
    makeHideFlags(COL_COUNT * ROW_COUNT),
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHideFlags((prev) => {
        const firstTrueIndex = prev.findIndex((item) => item === true)
        if (firstTrueIndex === -1) {
          clearInterval(intervalId)
          return prev
        }
        const newHideFlags = [...prev]
        newHideFlags[firstTrueIndex] = false
        return newHideFlags
      })
    }, INTERVAL_DELAY)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div
      className={clsx(`grid`, className)}
      style={{
        gridTemplateColumns: `repeat(${COL_COUNT}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${ROW_COUNT}, minmax(0, 1fr))`,
      }}
    >
      {hideFlags.map((isHide) => (
        <div className={clsx(isHide && 'bg-black')}></div>
      ))}
    </div>
  )
}
