import clsx from 'clsx'
import { TypingText } from '../../common/elements/TypingText'
import { DisplayDelay } from '../../common/elements/DisplayDelay'
import { makeRandomNum } from '../../common/utils/number'

const INITIALIZE_LOG_TEXT = `AUTH - Observer Authenticated
SYS - A.A.M.S. v4.46.401 Loaded
INIT - Anomaly Tracker ENABLED
INIT - Satellite Monitoring ACTIVATED
INIT - Anomalium Concentrarion Measurement ACTIVATED
MODE - Real-time Mapping ON
MODE - Real-time Chart ON
MODE - Search Mode SELECTED
STAT - ALL SYSTEMS ONLINE`

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
        <DisplayDelay delay={1800}>
          <TypingText
            text={`Session Id\n${sessionId}`}
            className="leading-[1.2] mb-2"
          />
        </DisplayDelay>

        <DisplayDelay delay={2000}>
          <TypingText text={`User Id\n${userId}`} className="leading-[1.2]" />
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
