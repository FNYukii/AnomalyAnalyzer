import clsx from 'clsx'
import { TypingText } from '../../misc/elements/TypingText'

const INITIALIZE_LOG_TEXT = `Inspecter Authenticated
A.M.I.S ver 1.46.401 loaded
Anomaly Tracker Enabled
Satellite Monitoring Activated
Realtime mapping on
Measuring anomalium concentration activated
Dynamic waveform chart on
Search mode Selected
All systems online`

export const TopLeftHUD = () => {
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
