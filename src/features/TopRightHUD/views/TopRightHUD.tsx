import clsx from 'clsx'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import { TypingText } from '../../common/elements/TypingText'
import { CountingUpSlider } from '../elements/CountingUpSlider'
import { CountingUpText } from '../elements/CountingUpText'
import { pickRandomItem } from '../../common/utils/array'
import { DisplayDelay } from '../../common/elements/DisplayDelay'
import { makeRandomNum } from '../../common/utils/number'
import { makeTrueByPercentage } from '../../common/utils/boolean'

const WEATHERS = [
  'clear',
  'sunny',
  'cloudy',
  'rainy',
  'snowy',
  'windy',
  'foggy',
  'thunderstorm',
] as const

const WIND_DIRECTIONS = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
] as const

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
  const weather = pickRandomItem(WEATHERS)
  const temperature = makeRandomNum(10, 40, 1)
  const humidity = makeRandomNum(30, 70, 1)

  const airQuality = makeRandomNum(0, 500)
  const windSpeed = makeRandomNum(0, 31)
  const uvIndex = makeRandomNum(0, 11)
  const airPressure = makeRandomNum(900, 1051)
  const visibility = makeRandomNum(0, 10)
  const windDirection = pickRandomItem(WIND_DIRECTIONS)

  return (
    <section className={clsx('mt-2', 'flex flex-col items-end')}>
      <DisplayDelay delay={600}>
        <TypingText
          text={`${weather} | ${temperature}℃ | ${humidity}%`}
          className="text-xl"
        />
      </DisplayDelay>

      <div
        className={clsx('mt-2', 'flex flex-col items-end', '*:leading-[1.4]')}
      >
        <DisplayDelay delay={1200}>
          <TypingText text={`WIND ${windSpeed} m/s`} className="normal-case" />
        </DisplayDelay>

        <DisplayDelay delay={1300}>
          <TypingText text={`WDIR ${windDirection}`} />
        </DisplayDelay>

        <DisplayDelay delay={1400}>
          <TypingText text={`AQI ${airQuality}`} />
        </DisplayDelay>

        <DisplayDelay delay={1500}>
          <TypingText text={`AP ${airPressure} hPa`} className="normal-case" />
        </DisplayDelay>

        <DisplayDelay delay={1600}>
          <TypingText text={`VIS ${visibility} km`} className="normal-case" />
        </DisplayDelay>

        <DisplayDelay delay={1700}>
          <TypingText text={`UVI ${uvIndex}`} />
        </DisplayDelay>
      </div>
    </section>
  )
}

const LevelSection = () => {
  const [level, setLevel] = useState(makeRandomNum(1, 5)) // 1 ~ 4

  // 一定間隔ごとに一定確率で level を 1~2 段階変化させる
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLevel((prev) => {
        const isChange = makeTrueByPercentage(30)
        if (!isChange) return prev

        const isLevelUp = makeTrueByPercentage(50)
        if (isLevelUp) {
          const newLevel = prev + makeRandomNum(1, 2) // 0,1
          return newLevel > 7 ? 7 : newLevel
        }

        const newLevel = prev - makeRandomNum(1, 3) // 0,1,2
        return newLevel < 1 ? 1 : newLevel
      })
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <section className="mt-8 mr-4 flex gap-3">
      <div className="flex flex-col items-end">
        <DisplayDelay delay={5600}>
          <TypingText
            text={`Alert\nlevel`}
            className={clsx(
              'leading-none text-left text-2xl',
              level === 7 && 'text-accent',
            )}
          />
        </DisplayDelay>

        <DisplayDelay delay={6000}>
          <CountingUpText
            num={level}
            className={clsx('mt-2 text-6xl h-13', level === 7 && 'text-accent')}
          />
        </DisplayDelay>
      </div>

      <DisplayDelay delay={6000}>
        <CountingUpSlider
          percentage={(level / MAX_AREA_LEVEL) * 100}
          color={level === 7 ? 'accent' : 'primary'}
        />
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
