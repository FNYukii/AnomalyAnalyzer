import clsx from 'clsx'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import { TypingText } from '../../misc/elements/TypingText'
import { CountingUpSlider } from '../elements/CountingUpSlider'
import { CountingUpText } from '../elements/CountingUpText'
import { getRandomItem, getRandomNum } from '../utils/random'

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

const MAX_AREA_LEVEL = 7

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
  const temperature = getRandomNum(10, 40, { decimals: 1 })
  const humidity = getRandomNum(30, 70, { decimals: 1 })

  return (
    <section className="mt-1">
      <TypingText
        text={`${weather} | ${temperature}℃ | ${humidity}%`}
        startDelay={600}
        className="text-xl"
      />
    </section>
  )
}

const LevelSection = () => {
  const level = getRandomNum(1, MAX_AREA_LEVEL + 1)

  return (
    <section className="mt-8 mr-4 flex gap-3">
      <div className="flex flex-col items-end">
        <TypingText
          text={`Area\nlevel`}
          startDelay={1000}
          className="leading-none text-left text-2xl"
        />

        <CountingUpText
          num={level}
          startDelay={1400}
          className="mt-2 text-6xl h-13"
        />
      </div>

      <CountingUpSlider
        rate={(level / MAX_AREA_LEVEL) * 100}
        startDelay={1400}
      />
    </section>
  )
}

export const TopRightHUD = () => {
  return (
    <div className="flex flex-col items-end">
      <ClockSection />
      <WeatherSection />
      <LevelSection />
    </div>
  )
}
