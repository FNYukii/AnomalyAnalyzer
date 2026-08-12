import { useEffect, useState } from 'react'
import clsx from 'clsx'

const DEFAULT_INTERVAL_DELAY = 100

type Props = {
  num: number
  intervalDelay?: number
  onComplete?: () => void
  className?: string
}

export const CountingUpText = ({
  num: initialNum,
  intervalDelay = DEFAULT_INTERVAL_DELAY,
  onComplete = () => {},
  className,
}: Props) => {
  const [countingUpNumber, setCountingUpNumber] = useState(0)

  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountingUpNumber((prevNum) => {
        if (prevNum < initialNum) {
          return prevNum + 1
        }

        clearInterval(intervalId)
        setIsCompleted(true)
        onComplete()
        return prevNum
      })
    }, intervalDelay)

    // アンマウント時/再実行時にタイマーを停止
    return () => {
      clearInterval(intervalId)
    }
  }, [initialNum, intervalDelay, onComplete])

  return !isCompleted ? (
    <div className={clsx('relative', className)}>
      <span className="absolute">{countingUpNumber}</span>
      <span className="invisible">{initialNum}</span>
    </div>
  ) : (
    <span className={className}>{initialNum}</span>
  )
}
