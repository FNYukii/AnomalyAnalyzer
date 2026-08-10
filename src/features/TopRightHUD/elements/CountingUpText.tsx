import clsx from 'clsx'
import { useEffect, useState } from 'react'

const DEFAULT_INTERVAL_DELAY = 180

type Props = {
  num: number
  startDelay?: number
  intervalDelay?: number
  className?: string
}

export const CountingUpText = ({
  num: initialNum,
  startDelay = 0,
  intervalDelay = DEFAULT_INTERVAL_DELAY,
  className,
}: Props) => {
  const [countingUpNumber, setCountingUpNumber] = useState(0)
  const [isCounting, setIsCounting] = useState(true)

  useEffect(() => {
    // props.textが更新されたら、表示をリセット
    setCountingUpNumber(0)

    let intervalId: number

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setCountingUpNumber((prevNum) => {
          if (prevNum < initialNum) {
            return prevNum + 1
          }

          clearInterval(intervalId)
          setIsCounting(false)
          return prevNum
        })
      }, intervalDelay)
    }, startDelay)

    // アンマウント時/再実行時にタイマーを停止
    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="relative *:whitespace-pre">
      <p className={clsx('absolute', className)}>
        {isCounting && <>{countingUpNumber === 0 ? '' : countingUpNumber}</>}
        {!isCounting && initialNum}
      </p>

      <p className={clsx('invisible', className)}>{initialNum}</p>
    </div>
  )
}
