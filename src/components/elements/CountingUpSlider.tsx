import { useEffect, useState } from 'react'
import { Slider } from './Slider'

const DEFAULT_INTERVAL_DELAY = 80

type Props = {
  rate: number
  startDelay?: number
  intervalDelay?: number
  className?: string
}

export const CountingUpSlider = ({
  rate: initialRate,
  startDelay = 0,
  intervalDelay = DEFAULT_INTERVAL_DELAY,
}: Props) => {
  const [countingUpRate, setCountingUpRate] = useState(0)
  const [isCounting, setIsCounting] = useState(true)

  useEffect(() => {
    // props.textが更新されたら、表示をリセット
    setCountingUpRate(0)

    let intervalId: number

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setCountingUpRate((prevNum) => {
          if (prevNum < initialRate) {
            return prevNum + 5
          }

          clearInterval(intervalId)
          setIsCounting(false)
          return initialRate
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
    <div>
      {countingUpRate === 0 && <Slider value={0} className="invisible" />}

      {countingUpRate !== 0 && (
        <Slider value={isCounting ? countingUpRate : initialRate} />
      )}
    </div>
  )
}
