import { useEffect, useState } from 'react'
import clsx from 'clsx'
import dayjs from 'dayjs'

import { DisplayDelay } from '../../common/elements/DisplayDelay'
import { TypingText } from '../../common/elements/TypingText'

export const ClockSection = () => {
  const [now, setNow] = useState(dayjs)

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
