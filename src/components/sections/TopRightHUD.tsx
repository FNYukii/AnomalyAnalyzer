import clsx from 'clsx'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import { TypingText } from '../parts/TypingText'
import { getRandomItem, getRandomNum } from '../../utils/random'

const WEATHERS = [
  'clear',
  'sunny',
  'cloudy',
  'rainy',
  'snowy',
  'windy',
  'foggy',
  'thunderstorm',
]

const ClockSection = () => {
  const [now, setNow] = useState(dayjs())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(dayjs())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className={clsx('flex flex-col items-end', '*:text-3xl')}>
      <TypingText text={now.format('YYYY-MM-DD dddd')} />
      <TypingText text={now.format('HH:mm:ss')} startDelay={400} />
    </section>
  )
}

const WeatherSection = () => {
  const weather = getRandomItem(WEATHERS)
  const temperature = getRandomNum(10, 40)
  const humidity = getRandomNum(30, 70)

  return (
    <section>
      <TypingText
        text={`${weather} | ${temperature}℃ | ${humidity}%`}
        startDelay={600}
        className="mt-1 text-xl"
      />
    </section>
  )
}

export const TopRightHUD = () => {
  return (
    <div className="flex flex-col items-end">
      <ClockSection />
      <WeatherSection />
    </div>
  )
}
