import clsx from 'clsx'
import { pickRandomItems } from '../../../common/utils/array'
import { makeTrueByPercentage } from '../../../common/utils/boolean'
import { makeRandomNum } from '../../../common/utils/number'
import { MarkerIcon } from '../../elements/MarkerIcon'

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

export const AnomaryMarker = () => {
  const isGreatAnomaly = makeTrueByPercentage(20)

  const anomaliumConcentration = !isGreatAnomaly
    ? makeRandomNum(10, 300, 2)
    : makeRandomNum(300, 400, 2)

  const anomalyTypeCont = makeRandomNum(1, !isGreatAnomaly ? 1 : 4)
  const anomalyTypes = pickRandomItems(ANOMALY_TYPES, anomalyTypeCont)

  return (
    <div className={clsx('flex gap-1', isGreatAnomaly && 'text-accent')}>
      <MarkerIcon className="size-12" />

      <div>
        <p>{anomaliumConcentration}</p>

        <div className="mt-1 flex gap-1">
          <div
            className={clsx(
              'w-[3px]',
              isGreatAnomaly ? 'bg-accent' : 'bg-primary',
            )}
          />
          <p className="leading-none">{anomalyTypes.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}
