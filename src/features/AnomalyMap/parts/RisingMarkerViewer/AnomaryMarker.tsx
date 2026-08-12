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

type IntegerAndDecimalTextProps = {
  value: number
}

const IntegerAndDecimalText = ({ value }: IntegerAndDecimalTextProps) => {
  const [integerPart, decimalPart] = value.toString().split('.')

  return (
    <p>
      <span className="text-2xl">{integerPart}</span>

      {decimalPart !== undefined && <span>.{decimalPart}</span>}
    </p>
  )
}

/**
 * アノマリーマーカー
 *
 * - アノマリウム濃度, アノマリータイプ をランダム生成し、表示する
 * - 一定濃度以上なら、アクセントカラーで表示
 */
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
        <IntegerAndDecimalText value={anomaliumConcentration} />

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
