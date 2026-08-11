import clsx from 'clsx'
import { DisplayDelay } from '../../misc/elements/DisplayDelay'
import { FadeIn } from '../../misc/elements/FadeIn'
import { pickRandomItem } from '../../misc/utils/array'
import { makeRandomNum } from '../../misc/utils/number'
import { AREA_TYPES } from '../../misc/constants'
import { PieChart } from '../parts/PieChart'
import { ScatterChart } from '../parts/ScatterChart'

const CHART_TYPES = ['pie', 'scatter'] as const

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
              'aspect-square',
              'border border-primary/50 bg-primary/15',
              'corner-border corner-border-primary',
            )}
          >
            {chartType === 'pie' && <PieChart />}
            {chartType === 'scatter' && <ScatterChart />}
          </div>
        </section>
      </FadeIn>
    </DisplayDelay>
  )
}

export const BottomRightHUD = () => {
  return (
    <div className={clsx('h-full', 'flex justify-end')}>
      <div className={clsx('grid grid-rows-3 grid-cols-3 gap-y-2 gap-x-3')}>
        <ChartSection displayDelay={4600} className="col-start-3" />
        <ChartSection displayDelay={4400} className="col-start-3 row-start-2" />
        <ChartSection displayDelay={4200} className="col-start-3 row-start-3" />
        <ChartSection displayDelay={4000} className="col-start-2 row-start-3" />
        <ChartSection displayDelay={3800} className="row-start-3" />
      </div>
    </div>
  )
}
