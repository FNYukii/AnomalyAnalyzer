import clsx from 'clsx'
import { TypingText } from '../parts/TypingText'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

const INITIALIZE_LOG_TEXT = `Inspecter Authenticated
A.M.I.S ver 1.46.401 loaded
Anomaly Tracker Enabled
Satellite Monitoring Activated
Realtime mapping on
Measuring anomalium concentration activated
Dynamic waveform chart on
Search mode Selected
All systems online`

const LeftHUD = () => {
  return (
    <div>
      <section className={clsx('leading-[1.2]')}>
        <TypingText text={INITIALIZE_LOG_TEXT} intervalDelay={6} />
      </section>

      <section className="mt-8">
        <TypingText
          text={'Session Id\n4092-8891-6791-5798-5014'}
          startDelay={1400}
          className="leading-[1.2]"
        />
        <TypingText
          text={'User Id\n8017-1469'}
          startDelay={1800}
          className="mt-2 leading-[1.2]"
        />
      </section>

      <section className="mt-8">
        <TypingText text="Search ◀︎" startDelay={2200} />

        <TypingText text="Analyze" startDelay={2000} className="opacity-60" />
        <TypingText text="Track" startDelay={2400} className="opacity-60" />
        <TypingText text="Command" startDelay={2600} className="opacity-60" />
      </section>
    </div>
  )
}

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

const RightHUD = () => {
  return (
    <div>
      <ClockSection />
    </div>
  )
}

type Props = {
  className?: string
}

export const HUD = (props: Props) => {
  return (
    <div
      className={clsx('w-full p-1', 'flex justify-between', props.className)}
    >
      <LeftHUD />
      <RightHUD />
    </div>
  )
}
