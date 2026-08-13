import dayjs from 'dayjs'
import {
  Line,
  LineChart as RCLineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

import { makeRandomNum } from '../../../common/utils/number'

type Record = {
  hour: number
  concentration: number
}

const makeConcentrationRecords = (): Record[] => {
  const HOUR_OFFSETS = [5, 4, 3, 2, 1, 0]
  const records: Record[] = []

  HOUR_OFFSETS.forEach((hourOffset) => {
    const hour = dayjs().add(-hourOffset, 'hour').hour()
    const concentration =
      (records.at(-1)?.concentration ?? 0) + makeRandomNum(1, 20)

    records.push({
      hour,
      concentration,
    })
  })

  return records
}

/**
 * 折れ線グラフ
 *
 * 直近6時間のアノマリー濃度をランダム生成し、表示する
 */
export const LineChart = () => {
  const data = makeConcentrationRecords()

  return (
    <ResponsiveContainer className="pr-1" inert={true}>
      <RCLineChart data={data}>
        <YAxis
          dataKey="concentration"
          stroke="var(--color-primary)"
          fontSize={12}
          width={20}
          domain={[0, 99]}
          ticks={[0, 50, 99]}
        />
        <XAxis
          dataKey="hour"
          stroke="var(--color-primary)"
          fontSize={12}
          height={16}
        />

        <Line
          dataKey="concentration"
          stroke="var(--color-primary)"
          dot={{ fill: 'var(--color-primary)' }}
          activeDot={false}
        />
      </RCLineChart>
    </ResponsiveContainer>
  )
}
