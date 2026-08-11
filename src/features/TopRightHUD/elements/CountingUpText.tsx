import clsx from 'clsx'
import { useEffect, useState } from 'react'

const DEFAULT_INTERVAL_DELAY = 180

type Props = {
  num: number
  intervalDelay?: number
  className?: string
}

export const CountingUpText = ({
  num: initialNum,
  intervalDelay = DEFAULT_INTERVAL_DELAY,
  className,
}: Props) => {
  const [countingUpNumber, setCountingUpNumber] = useState(0)

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
        return prevNum
      })
    }, intervalDelay)

    // アンマウント時/再実行時にタイマーを停止
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="relative *:whitespace-pre">
      <p className={clsx('absolute', className)}>{countingUpNumber}</p>
      <p className={clsx('invisible', className)}>{initialNum}</p>
    </div>
  )
}
