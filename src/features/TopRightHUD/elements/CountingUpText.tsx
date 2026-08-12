import clsx from 'clsx'
import { useEffect, useState } from 'react'

const DEFAULT_INTERVAL_DELAY = 180

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
    // props.textが更新されたら、表示をリセット
    setCountingUpNumber(0)

    let intervalId: number

    intervalId = setInterval(() => {
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
  }, [])

  return (
    <div className={clsx('relative *:whitespace-pre', className)}>
      <span className={clsx('absolute', className)}>
        {!isCompleted ? countingUpNumber : initialNum}
      </span>
      <span className={clsx('invisible', className)}>{initialNum}</span>
    </div>
  )
}
