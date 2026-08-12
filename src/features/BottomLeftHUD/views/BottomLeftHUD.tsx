import clsx from 'clsx'
import { BarWaveformChart } from '../parts/BarWaveformChart'
import { DisplayDelay } from '../../common/elements/DisplayDelay'
import { FadeIn } from '../../common/elements/FadeIn'
import { LineChart } from '../parts/LineChart'
import { makeRandomNum } from '../../common/utils/number'
import { pickRandomItem } from '../../common/utils/array'
import { AREA_TYPES } from '../../common/constants'
import { PentagonRadarChart } from '../parts/PentagonRadarChart'
import { useEffect, useState } from 'react'
import { makeTrueByPercentage } from '../../common/utils/boolean'
import { TypingText } from '../../common/elements/TypingText'
import { AreaChart } from '../parts/AreaChart'

const CHART_TYPES = ['barWaveform', 'line', 'pentagonRadar', 'area'] as const

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
            'aspect-video',
            'border border-primary/50 bg-primary/15',
            'corner-border corner-border-primary',
          )}
        >
          {chartType === 'barWaveform' && <BarWaveformChart />}
          {chartType === 'line' && <LineChart />}
          {chartType === 'pentagonRadar' && <PentagonRadarChart />}
          {chartType === 'area' && <AreaChart />}
        </div>
      </section>
    </FadeIn>
  )
}

export const BottomLeftHUD = () => {
  return (
    <div
      className={clsx(
        'h-full w-fit',
        'grid grid-cols-3 grid-rows-2 gap-y-2 gap-x-3',
      )}
    >
      <DisplayDelay delay={3000}>
        <ChartSection />
      </DisplayDelay>

      <DisplayDelay delay={3200}>
        <ChartSection className="col-start-1 row-start-2" />
      </DisplayDelay>

      <DisplayDelay delay={3400}>
        <ChartSection className="col-start-2 row-start-2" />
      </DisplayDelay>

      <DisplayDelay delay={3600}>
        <ChartSection className="col-start-3 row-start-2" />
      </DisplayDelay>
    </div>
  )
}
