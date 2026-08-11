import { ResponsiveContainer, PieChart as RCPieChart, Pie } from 'recharts'
import { makeRandomNum } from '../../misc/utils/number'
import { useEffect, useState } from 'react'

type Record = {
  name: string
  value: number
  fillOpacity: number
}

const makePercentageRecords = (): Record[] => {
  return [
    { name: 'a', value: makeRandomNum(0, 101), fillOpacity: 1 },
    { name: 'b', value: makeRandomNum(0, 101), fillOpacity: 0.8 },
    { name: 'c', value: makeRandomNum(0, 101), fillOpacity: 0.6 },
    { name: 'd', value: makeRandomNum(0, 101), fillOpacity: 0.4 },
  ]
}

/**
 * 円グラフ
 *
 * アノマリーの構成要素の比率をランダム生成し、表示する
 */
export const PieChart = () => {
  const [data, setData] = useState(makePercentageRecords())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(makePercentageRecords())
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <ResponsiveContainer>
      <RCPieChart>
        <Pie
          data={data}
          dataKey="value"
          innerRadius="70%"
          outerRadius="90%"
          fill="var(--color-primary)"
          stroke="none"
          paddingAngle={4}
        />
      </RCPieChart>
    </ResponsiveContainer>
  )
}
