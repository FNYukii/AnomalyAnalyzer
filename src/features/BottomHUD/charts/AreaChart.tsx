import dayjs from 'dayjs'
import {
  Area,
  AreaChart as RCAreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import { makeRandomNum } from '../../common/utils/number'

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
      (records.at(-1)?.concentration ?? 0) + makeRandomNum(1, 15)

    records.push({
      hour,
      concentration,
    })
  })

  return records
}

/**
 * 面グラフ
 *
 * 直近6時間のアノマリー濃度をランダム生成し、表示する
 */
export const AreaChart = () => {
  const data = makeConcentrationRecords()

  return (
    <ResponsiveContainer className="pr-1" inert={true}>
      <RCAreaChart data={data}>
        <YAxis
          dataKey="concentration"
          stroke="var(--color-primary)"
          fontSize={12}
          width={20}
        />
        <XAxis
          dataKey="hour"
          stroke="var(--color-primary)"
          fontSize={12}
          height={16}
        />

        <Area
          type="monotone"
          dataKey="concentration"
          stroke="var(--color-primary)"
          fillOpacity={0.4}
          dot={false}
          activeDot={false}
        />
      </RCAreaChart>
    </ResponsiveContainer>
  )
}
