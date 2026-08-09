import clsx from 'clsx'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import { TypingText } from '../parts/TypingText'

const ClockSection = () => {
  const [now, setNow] = useState(dayjs())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(dayjs())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className={clsx('flex flex-col items-end', '*:text-2xl')}>
      <TypingText text={now.format('YYYY-MM-DD dddd')} />
      <TypingText text={now.format('HH:mm:ss')} startDelay={400} />
    </section>
  )
}

export const TopRightHUD = () => {
  return (
    <div>
      <ClockSection />
    </div>
  )
}
