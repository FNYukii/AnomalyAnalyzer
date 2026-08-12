import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { AREA_TYPES } from '../../common/constants'
import { DisplayDelay } from '../../common/elements/DisplayDelay'
import { FadeIn } from '../../common/elements/FadeIn'
import { TypingText } from '../../common/elements/TypingText'
import { pickRandomItem } from '../../common/utils/array'
import { makeTrueByPercentage } from '../../common/utils/boolean'
import { makeRandomNum } from '../../common/utils/number'
import {
  AreaChart,
  BarWaveformChart,
  LineChart,
  PentagonRadarChart,
  PieChart,
  ScatterChart,
  TriangleRadarChart,
} from '../charts'

const LANDSCAPE_CHART_TYPES = [
  'barWaveform',
  'line',
  'pentagonRadar',
  'area',
] as const
const SQUARE_CHART_TYPES = ['pie', 'scatter', 'triangleRadar'] as const

const makeAreaName = (): string => {
  const areaType = pickRandomItem(AREA_TYPES)
  const areaNumber = makeRandomNum(1, 100)
  return `${areaType} ${areaNumber}`
}

type ChartSectionProps = {
  shape: 'landscape' | 'square'
  className?: string
}

export const ChartSection = ({ shape, className }: ChartSectionProps) => {
  const chartTypes =
    shape === 'landscape' ? LANDSCAPE_CHART_TYPES : SQUARE_CHART_TYPES

  const [areaName, setAreaName] = useState(makeAreaName())
  const [chartType, setChartType] = useState(pickRandomItem(chartTypes))

  // 一定間隔ごとに一定確率でグラフを入れ替え
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (makeTrueByPercentage(90)) return

      setAreaName(makeAreaName())
      setChartType(pickRandomItem(chartTypes))
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <FadeIn key={areaName}>
      <section className={clsx('grid grid-rows-[auto_1fr]', className)}>
        <DisplayDelay delay={400}>
          <TypingText text={areaName} className="text-xs" />
        </DisplayDelay>

        <div
          className={clsx(
            shape === 'landscape' ? 'aspect-video' : 'aspect-square',
            'border border-primary/50 bg-primary/15',
            'corner-border corner-border-primary',
          )}
        >
          {/* 横長チャート */}
          {chartType === 'barWaveform' && <BarWaveformChart />}
          {chartType === 'line' && <LineChart />}
          {chartType === 'pentagonRadar' && <PentagonRadarChart />}
          {chartType === 'area' && <AreaChart />}

          {/* 正方形チャート */}
          {chartType === 'pie' && <PieChart />}
          {chartType === 'scatter' && <ScatterChart />}
          {chartType === 'triangleRadar' && <TriangleRadarChart />}
        </div>
      </section>
    </FadeIn>
  )
}
