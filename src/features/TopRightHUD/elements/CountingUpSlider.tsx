import { useEffect, useState } from 'react'

import { Slider } from './Slider'

const DEFAULT_INTERVAL_DELAY = 80

type Props = {
  percentage: number
  color?: 'primary' | 'accent'
  intervalDelay?: number
}

export const CountingUpSlider = ({
  percentage: initialPercentage,
  color = 'primary',
  intervalDelay = DEFAULT_INTERVAL_DELAY,
}: Props) => {
  const [countingUpPercentage, setCountingUpPercentage] = useState(0)

  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountingUpPercentage((prevNum) => {
        if (prevNum < initialPercentage) {
          return prevNum + 5
        }

        clearInterval(intervalId)
        setIsCompleted(true)
        return initialPercentage
      })
    }, intervalDelay)

    // アンマウント時/再実行時にタイマーを停止
    return () => {
      clearInterval(intervalId)
    }
  }, [initialPercentage, intervalDelay])

  return !isCompleted ? (
    <div className="relative">
      <Slider
        percentage={countingUpPercentage}
        color={color}
        duration={!isCompleted ? 'fast' : 'slow'}
        className="absolute"
      />

      <Slider percentage={0} className="invisible" />
    </div>
  ) : (
    <Slider
      percentage={initialPercentage}
      color={color}
      duration={!isCompleted ? 'fast' : 'slow'}
    />
  )
}
