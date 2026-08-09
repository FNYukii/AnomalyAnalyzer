import clsx from 'clsx'
import { TypingText } from '../parts/TypingText'

const INITIALIZE_LOG_TEXT = `Inspecter Authenticated
A.M.I.S ver 1.46.401 loaded
Anomaly Tracker Enabled
Satellite Monitoring Activated
Realtime mapping on
Measuring anomalium concentration activated
Dynamic waveform chart on
Search mode Selected
All systems online`

type Props = {
  className?: string
}

export const HUD = (props: Props) => {
  return (
    <div className={clsx('p-1', props.className)}>
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

      <section className="mt-8 *:opacity-60">
        <TypingText
          text="Search ◀︎"
          className="!opacity-100"
          startDelay={2200}
        />

        <TypingText text="Analyze" startDelay={2000} />
        <TypingText text="Track" startDelay={2400} />
        <TypingText text="Command" startDelay={2600} />
      </section>
    </div>
  )
}
