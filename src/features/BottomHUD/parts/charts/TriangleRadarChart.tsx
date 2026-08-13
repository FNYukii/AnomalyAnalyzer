import { useEffect, useState } from 'react'
import {
  PolarGrid,
  Radar,
  RadarChart as RCRadarChart,
  ResponsiveContainer,
} from 'recharts'

import { makeRandomNum } from '../../../common/utils/number'

type Record = {
  name: string
  value: number
}

const makeStatRecords = (): Record[] => {
  return [
    {
      name: 'P',
      value: makeRandomNum(0, 101),
    },
    {
      name: 'S',
      value: makeRandomNum(0, 101),
    },
    {
      name: 'M',
      value: makeRandomNum(0, 101),
    },
  ]
}

/**
 * 三角形レーダーチャート
 *
 * アノマリーの各波長をランダム生成し、表示する
 */
export const TriangleRadarChart = () => {
  const [data, setData] = useState(makeStatRecords)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(makeStatRecords())
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <ResponsiveContainer inert={true}>
      <RCRadarChart data={data} cy="60%" outerRadius="99%">
        <PolarGrid stroke="var(--color-primary)" strokeOpacity={0.6} />

        <Radar
          dataKey="value"
          stroke="var(--color-primary)"
          fill="var(--color-primary)"
          fillOpacity={0.4}
          activeDot={false}
        />
      </RCRadarChart>
    </ResponsiveContainer>
  )
}
