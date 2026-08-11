import dayjs from 'dayjs'
import {
  Line,
  LineChart as RCLineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

type Record = {
  hour: number
  concentration: number
}

const getRandomNum = (min: number, max: number) => {
  const randomNum = Math.random() * (max - min) + min
  return Math.floor(randomNum * 100) / 100
}

const makeConcentrationRecords = (): Record[] => {
  const RECORDS_LENGTH = 6

  const endHour = dayjs().hour()
  const startHour = endHour - (RECORDS_LENGTH - 1)

  const hours: number[] = []
  for (let i = startHour; i <= endHour; i++) {
    hours.push(i)
  }

  const records: Record[] = []
  hours.forEach((hour) => {
    records.push({
      hour,
      concentration: (records.at(-1)?.concentration ?? 0) + getRandomNum(1, 30),
    })
  })

  return records
}

/**
 * 折れ線グラフ
 * 直近6時間のアノマリー濃度をランダム生成し、表示する
 */
export const LineChart = () => {
  const data = makeConcentrationRecords()

  return (
    <ResponsiveContainer className="pr-1">
      <RCLineChart data={data}>
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
