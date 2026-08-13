import { useState } from 'react'
import clsx from 'clsx'

import { DisplayDelay } from '../../common/elements/DisplayDelay'
import { TypingText } from '../../common/elements/TypingText'
import { pickRandomItem } from '../../common/utils/array'
import { makeRandomNum } from '../../common/utils/number'

const WEATHERS = [
  'clear',
  'sunny',
  'cloudy',
  'rainy',
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

const makeWeatherData = () => {
  return {
    weather: pickRandomItem(WEATHERS),
    temperature: makeRandomNum(10, 40, 1),
    humidity: makeRandomNum(30, 70, 1),
    airQuality: makeRandomNum(0, 500),
    windSpeed: makeRandomNum(0, 31),
    uvIndex: makeRandomNum(0, 11),
    airPressure: makeRandomNum(900, 1051),
    visibility: makeRandomNum(0, 10),
    windDirection: pickRandomItem(WIND_DIRECTIONS),
  }
}

export const WeatherSection = () => {
  const [weatherData] = useState(makeWeatherData)

  const {
    weather,
    temperature,
    humidity,
    airQuality,
    windSpeed,
    uvIndex,
    airPressure,
    visibility,
    windDirection,
  } = weatherData

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
