import clsx from 'clsx'
import { DisplayDelay } from '../../misc/elements/DisplayDelay'
import { FadeIn } from '../../misc/elements/FadeIn'
import { pickRandomItem } from '../../misc/utils/array'
import { makeRandomNum } from '../../misc/utils/number'
import { AREA_TYPES } from '../../misc/constants'
import { PieChart } from '../parts/PieChart'
import { ScatterChart } from '../parts/ScatterChart'
import { TriangleRadarChart } from '../parts/TriangleRadarChart'
import { useEffect, useState } from 'react'
import { makeTrueByPercentage } from '../../misc/utils/boolean'
import { TypingText } from '../../misc/elements/TypingText'

const CHART_TYPES = ['pie', 'scatter', 'triangleRadar'] as const

const makeAreaName = (): string => {
  const areaType = pickRandomItem(AREA_TYPES)
  const areaNumber = makeRandomNum(1, 100)
  return `${areaType} ${areaNumber}`
}

type ChartSectionProps = {
  className?: string
}

const ChartSection = ({ className }: ChartSectionProps) => {
  const [areaName, setAreaName] = useState(makeAreaName())
  const [chartType, setChartType] = useState(pickRandomItem(CHART_TYPES))

  // 一定間隔ごとに一定確率でグラフを入れ替え
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (makeTrueByPercentage(90)) return

      setAreaName(makeAreaName())
      setChartType(pickRandomItem(CHART_TYPES))
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <FadeIn key={areaName}>
      <section className={clsx('grid grid-rows-[auto_1fr]', className)}>
        <DisplayDelay delay={400}>
          <TypingText text={areaName} className="text-sm" />
        </DisplayDelay>

        <div
          className={clsx(
            'aspect-square',
            'border border-primary/50 bg-primary/15',
            'corner-border corner-border-primary',
          )}
        >
          {chartType === 'pie' && <PieChart />}
          {chartType === 'scatter' && <ScatterChart />}
          {chartType === 'triangleRadar' && <TriangleRadarChart />}
        </div>
      </section>
    </FadeIn>
  )
}

export const BottomRightHUD = () => {
  return (
    <div className={clsx('h-full', 'flex justify-end')}>
      <div className={clsx('grid grid-rows-3 grid-cols-3 gap-y-2 gap-x-3')}>
        <DisplayDelay delay={4600}>
          <ChartSection className="col-start-3" />
        </DisplayDelay>

        <DisplayDelay delay={4400}>
          <ChartSection className="col-start-3 row-start-2" />
        </DisplayDelay>
        <DisplayDelay delay={4200}>
          <ChartSection className="col-start-3 row-start-3" />
        </DisplayDelay>
        <DisplayDelay delay={4000}>
          <ChartSection className="col-start-2 row-start-3" />
        </DisplayDelay>
        <DisplayDelay delay={3800}>
          <ChartSection className="row-start-3" />
        </DisplayDelay>
      </div>
    </div>
  )
}
