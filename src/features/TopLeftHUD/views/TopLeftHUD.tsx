import clsx from 'clsx'
import { TypingText } from '../../misc/elements/TypingText'
import { DisplayDelay } from '../../misc/elements/DisplayDelay'
import { makeRandomNum } from '../../misc/utils/number'

const INITIALIZE_LOG_TEXT = `Inspecter Authenticated
A.M.I.S ver 1.46.401 loaded
Anomaly Tracker Enabled
Satellite Monitoring Activated
Realtime mapping on
Measuring anomalium concentration activated
Dynamic waveform chart on
Search mode Selected
All systems online`

const makeRandom4NumberStr = (): string => {
  const randomNum = makeRandomNum(1, 10000)
  return String(randomNum).padStart(4, '0')
}

export const TopLeftHUD = () => {
  const sessionId = `${makeRandom4NumberStr()}-${makeRandom4NumberStr()}-${makeRandom4NumberStr()}-${makeRandom4NumberStr()}`
  const userId = `${makeRandom4NumberStr()}-${makeRandom4NumberStr()}`

  return (
    <div>
      <section className={clsx('leading-[1.2]')}>
        <TypingText text={INITIALIZE_LOG_TEXT} intervalDelay={6} />
      </section>

      <section className="mt-8">
        <DisplayDelay delay={1400}>
          <TypingText
            text={`Session Id\n${sessionId}`}
            className="leading-[1.2]"
          />
        </DisplayDelay>

        <DisplayDelay delay={1800}>
          <TypingText
            text={`User Id\n${userId}`}
            className="mt-2 leading-[1.2]"
          />
        </DisplayDelay>
      </section>

      <section className="mt-8 *:leading-[1.2]">
        <DisplayDelay delay={2200}>
          <TypingText text="Search ◀︎" />
        </DisplayDelay>

        <DisplayDelay delay={2400}>
          <TypingText text="Analyze" className="opacity-60" />
        </DisplayDelay>

        <DisplayDelay delay={2600}>
          <TypingText text="Track" className="opacity-60" />
        </DisplayDelay>

        <DisplayDelay delay={2800}>
          <TypingText text="Command" className="opacity-60" />
        </DisplayDelay>
      </section>
    </div>
  )
}
