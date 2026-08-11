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
  const [countingUpRate, setCountingUpRate] = useState(0)

  useEffect(() => {
    // props.textが更新されたら、表示をリセット
    setCountingUpRate(0)

    let intervalId: number

    intervalId = setInterval(() => {
      setCountingUpRate((prevNum) => {
        if (prevNum < initialPercentage) {
          return prevNum + 5
        }

        clearInterval(intervalId)
        return initialPercentage
      })
    }, intervalDelay)

    // アンマウント時/再実行時にタイマーを停止
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="relative">
      <Slider percentage={countingUpRate} color={color} className="absolute" />
      <Slider percentage={0} className="invisible" />
    </div>
  )
}
