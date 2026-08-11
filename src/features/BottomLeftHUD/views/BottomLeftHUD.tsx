import clsx from 'clsx'
import { BarWaveformChart } from '../parts/BarWaveformChart'
import { DisplayDelay } from '../../misc/elements/DisplayDelay'
import { FadeIn } from '../../misc/elements/FadeIn'
import { LineChart } from '../parts/LineChart'
import { ScatterChart } from '../parts/ScatterChart'
import { makeRandomNum } from '../../misc/utils/number'
import { pickRandomItem } from '../../misc/utils/array'
import { AREA_TYPES, CHART_TYPES } from '../constants'

const makeAreaName = (): string => {
  const areaType = pickRandomItem(AREA_TYPES)
  const areaNumber = makeRandomNum(1, 100)
  return `${areaType} ${areaNumber}`
}

type ChartSectionProps = {
  displayDelay?: number
  className?: string
}

const ChartSection = ({ displayDelay, className }: ChartSectionProps) => {
  const areaName = makeAreaName()
  const chartType = pickRandomItem(CHART_TYPES)

  return (
    <DisplayDelay delay={displayDelay ?? 0}>
      <FadeIn>
        <section className={clsx('grid grid-rows-[auto_1fr]', className)}>
          <span className="text-sm">{areaName}</span>

          <div
            className={clsx(
              'aspect-video',
              'border border-primary/50 bg-primary/15',
              'corner-border corner-border-primary',
            )}
          >
            {chartType === 'barWaveform' && <BarWaveformChart />}
            {chartType === 'line' && <LineChart />}
            {chartType === 'scatter' && <ScatterChart />}
          </div>
        </section>
      </FadeIn>
    </DisplayDelay>
  )
}

export const BottomLeftHUD = () => {
  return (
    <div
      className={clsx(
        'h-full w-fit',
        'grid grid-rows-2 grid-cols-2 gap-y-2 gap-x-3',
      )}
    >
      <ChartSection displayDelay={3000} />
      <ChartSection displayDelay={3200} className="col-start-1" />
      <ChartSection displayDelay={3400} />
    </div>
  )
}
