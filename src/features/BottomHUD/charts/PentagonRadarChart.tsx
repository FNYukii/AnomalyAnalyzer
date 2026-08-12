import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart as RCRadarChart,
  ResponsiveContainer,
} from 'recharts'

import { makeRandomNum } from '../../common/utils/number'

type Record = {
  name: string
  value: number
}

const makeStatRecords = (): Record[] => {
  return [
    {
      name: 'RNG',
      value: makeRandomNum(0, 101),
    },
    {
      name: 'LVL',
      value: makeRandomNum(0, 101),
    },
    {
      name: 'POP',
      value: makeRandomNum(0, 101),
    },
    {
      name: 'CNC',
      value: makeRandomNum(0, 101),
    },
    {
      name: 'SIT',
      value: makeRandomNum(0, 101),
    },
  ]
}

/**
 * レーダーチャート
 *
 * アノマリーの統計情報をランダム生成し、表示する
 */
export const PentagonRadarChart = () => {
  const data = makeStatRecords()

  return (
    <ResponsiveContainer inert={true}>
      <RCRadarChart data={data} cy="54%">
        <PolarGrid stroke="var(--color-primary)" strokeOpacity={0.6} />
        <PolarAngleAxis
          dataKey="name"
          stroke="var(--color-primary)"
          strokeOpacity={0.6}
          fontSize={12}
        />

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
