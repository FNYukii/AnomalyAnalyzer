import clsx from 'clsx'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import { TypingText } from '../../misc/elements/TypingText'
import { CountingUpSlider } from '../elements/CountingUpSlider'
import { CountingUpText } from '../elements/CountingUpText'
import { getRandomItem } from '../../misc/utils/array'
import { DisplayDelay } from '../../misc/elements/DisplayDelay'
import { makeRandomNum } from '../../misc/utils/number'

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

  // now を毎秒更新
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(dayjs())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className={clsx('flex flex-col items-end', '*:text-3xl')}>
      <TypingText text={now.format('YYYY-MM-DD dddd')} />

      <DisplayDelay delay={400}>
        <TypingText text={now.format('HH:mm:ss')} />
      </DisplayDelay>
    </section>
  )
}

const WeatherSection = () => {
  const weather = getRandomItem(WEATHERS)
  const temperature = makeRandomNum(10, 40, 1)
  const humidity = makeRandomNum(30, 70, 1)

  return (
    <section className="mt-1">
      <DisplayDelay delay={600}>
        <TypingText
          text={`${weather} | ${temperature}℃ | ${humidity}%`}
          className="text-xl"
        />
      </DisplayDelay>
    </section>
  )
}

const LevelSection = () => {
  const level = makeRandomNum(1, MAX_AREA_LEVEL + 1)

  return (
    <section className="mt-8 mr-4 flex gap-3">
      <div className="flex flex-col items-end">
        <DisplayDelay delay={1000}>
          <TypingText
            text={`Area\nlevel`}
            className="leading-none text-left text-2xl"
          />
        </DisplayDelay>

        <DisplayDelay delay={1400}>
          <CountingUpText num={level} className="mt-2 text-6xl h-13" />
        </DisplayDelay>
      </div>

      <DisplayDelay delay={1400}>
        <CountingUpSlider rate={(level / MAX_AREA_LEVEL) * 100} />
      </DisplayDelay>
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
