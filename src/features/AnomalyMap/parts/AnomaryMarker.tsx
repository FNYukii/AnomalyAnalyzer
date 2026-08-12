import { pickRandomItems } from '../../common/utils/array'
import { makeRandomNum } from '../../common/utils/number'
import { MarkerIcon } from '../elements/MarkerIcon'

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
  const anomaliumConcentration = makeRandomNum(10, 401, 2)

  const anomalyTypeCont = makeRandomNum(1, 4)
  const anomalyTypes = pickRandomItems(ANOMALY_TYPES, anomalyTypeCont)

  return (
    <div className="flex gap-1">
      <MarkerIcon className="size-12" />

      <div>
        <p>{anomaliumConcentration}</p>

        <div className="mt-1 flex gap-1">
          <div className="w-[3px] bg-primary" />
          <p className="leading-none">{anomalyTypes.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}
