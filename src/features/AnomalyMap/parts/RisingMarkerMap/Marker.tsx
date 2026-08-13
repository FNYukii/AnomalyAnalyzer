import { useState } from 'react'
import clsx from 'clsx'

import { DisplayDelay } from '../../../common/elements/DisplayDelay'
import { FadeIn } from '../../../common/elements/FadeIn'
import { TypingText } from '../../../common/elements/TypingText'
import { pickRandomItems } from '../../../common/utils/array'
import { makeTrueByPercentage } from '../../../common/utils/boolean'
import { makeRandomNum } from '../../../common/utils/number'
import { MarkerIcon } from '../../elements/MarkerIcon'

import { ConcentrationText } from './ConcentrationText'

const ANOMALY_TYPES = [
  'wind',
  'mutation',
  'thermodynamics',
  'gravity',
  'electricity',
  'radiation',
  'time',
  'optics',
  'psyche',
  'biology',
  'acid',
] as const

const MARKER_ICON_HEIGHT = 24

const makeAnomalyData = () => {
  const isGreatAnomaly = makeTrueByPercentage(20)

  const anomaliumConcentration = !isGreatAnomaly
    ? makeRandomNum(10, 300, 2)
    : makeRandomNum(300, 400, 2)

  const anomalyTypeCont = makeRandomNum(1, !isGreatAnomaly ? 1 : 4)
  const anomalyTypes = pickRandomItems(ANOMALY_TYPES, anomalyTypeCont)

  const anomalyAreaRadius = !isGreatAnomaly
    ? makeRandomNum(50, 110)
    : makeRandomNum(100, 201)

  return {
    isGreatAnomaly,
    anomaliumConcentration,
    anomalyTypes,
    anomalyAreaRadius,
  }
}

/**
 * アノマリーマーカー
 *
 * - アノマリウム濃度, アノマリータイプ をランダム生成し、表示する
 * - 一定濃度以上なら、アクセントカラーで表示
 */
export const Marker = () => {
  const [anomalyData] = useState(makeAnomalyData)

  const {
    isGreatAnomaly,
    anomaliumConcentration,
    anomalyTypes,
    anomalyAreaRadius,
  } = anomalyData

  return (
    <FadeIn>
      <div
        className={clsx('flex gap-2', isGreatAnomaly && 'text-accent')}
        style={{
          paddingBottom: `${anomalyAreaRadius - MARKER_ICON_HEIGHT}px`,
        }}
      >
        <div className="relative flex items-center justify-center">
          <MarkerIcon className={`size-${MARKER_ICON_HEIGHT}px`} />

          <div
            className={clsx(
              'absolute',
              'rounded-full border border-current/60 bg-current/10',
            )}
            style={{
              width: `${anomalyAreaRadius * 2}px`,
              height: `${anomalyAreaRadius * 2}px`,
            }}
          />
        </div>

        <div>
          <ConcentrationText
            value={anomaliumConcentration}
            highlightColor={!isGreatAnomaly ? 'primary' : 'accent'}
          />

          <DisplayDelay delay={1800}>
            <div className="mt-1 flex gap-1">
              <div
                className={clsx(
                  'w-[3px]',
                  isGreatAnomaly ? 'bg-accent' : 'bg-primary',
                )}
              />

              <TypingText
                text={anomalyTypes.join(', ')}
                className="leading-none"
              />
            </div>
          </DisplayDelay>
        </div>
      </div>
    </FadeIn>
  )
}
