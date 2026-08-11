import { useEffect, useState } from 'react'
import { Slider } from './Slider'

const DEFAULT_INTERVAL_DELAY = 80

type Props = {
  rate: number
  intervalDelay?: number
}

export const CountingUpSlider = ({
  rate: initialRate,
  intervalDelay = DEFAULT_INTERVAL_DELAY,
}: Props) => {
  const [countingUpRate, setCountingUpRate] = useState(0)

  useEffect(() => {
    // props.textが更新されたら、表示をリセット
    setCountingUpRate(0)

    let intervalId: number

    intervalId = setInterval(() => {
      setCountingUpRate((prevNum) => {
        if (prevNum < initialRate) {
          return prevNum + 5
        }

        clearInterval(intervalId)
        return initialRate
      })
    }, intervalDelay)

    // アンマウント時/再実行時にタイマーを停止
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="relative">
      <Slider value={countingUpRate} className="absolute" />
      <Slider value={0} className="invisible" />
    </div>
  )
}
