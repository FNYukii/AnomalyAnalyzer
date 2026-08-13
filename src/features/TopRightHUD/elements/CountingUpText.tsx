import { useEffect, useState } from 'react'
import clsx from 'clsx'

type Props = {
  num: number
  duration?: number // 完了までの時間（ミリ秒）デフォルト 1000ms
  onComplete?: () => void
  className?: string
}

export const CountingUpText = ({
  num: initialNum,
  duration = 1000,
  onComplete = () => {},
  className,
}: Props) => {
  const [countingUpNumber, setCountingUpNumber] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const startTime = performance.now()

    let requestId: number

    const render = (now: number) => {
      // 所要時間における経過時間の割合 (0.0 〜 1.0)
      const elapsedTime = now - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      // 割合に応じて、現在の数値を算出
      const currentNum = Math.floor(progress * initialNum)
      setCountingUpNumber(currentNum)

      // まだ途中なら次renderも予約
      if (progress < 1) {
        requestId = requestAnimationFrame(render)
      } else {
        setIsCompleted(true)
        onComplete()
      }
    }

    requestId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(requestId)
    }
  }, [initialNum, duration, onComplete])

  return !isCompleted ? (
    <div className={clsx('relative', className)}>
      <span className="absolute">{countingUpNumber}</span>
      <span className="invisible">{initialNum}</span>
    </div>
  ) : (
    <span className={className}>{initialNum}</span>
  )
}
