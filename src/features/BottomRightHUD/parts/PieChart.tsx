import { ResponsiveContainer, PieChart as RCPieChart, Pie } from 'recharts'
import { convertToPercentages, makeRandomNum } from '../../misc/utils/number'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

type Record = {
  name: string
  percentage: number
  fillOpacity: number
}

const makePercentageRecords = (): Record[] => {
  const values = [
    makeRandomNum(0, 101),
    makeRandomNum(0, 101),
    makeRandomNum(0, 101),
    makeRandomNum(0, 101),
  ] as const

  const percentages = convertToPercentages(values)

  return [
    { name: 'a', percentage: percentages[0], fillOpacity: 1 },
    { name: 'b', percentage: percentages[1], fillOpacity: 0.8 },
    { name: 'c', percentage: percentages[2], fillOpacity: 0.6 },
    { name: 'd', percentage: percentages[3], fillOpacity: 0.4 },
  ]
}

type FourPercentages = [number, number, number, number]

type FourPercentageGridProps = {
  percentages: FourPercentages
  className?: string
}

const FourPercentageGrid = ({
  percentages,
  className,
}: FourPercentageGridProps) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-2 grid-rows-2',
        'w-fit h-fit',
        '*:p-1 *:text-xs *:border-primary/50',
        className,
      )}
    >
      <div className="border-b border-r text-right">
        <span className="opacity-80">{percentages[1]}</span>
      </div>
      <div className="border-b">{percentages[0]}</div>
      <div className="border-r text-right">
        <span className="opacity-60">{percentages[2]}</span>
      </div>
      <div className="opacity-40">{percentages[3]}</div>
    </div>
  )
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
      setData((prev) => {
        const prevPercentages = prev.map((record) => record.percentage)

        // 割合を更新する要素をランダム決定
        const index = makeRandomNum(0, data.length)

        // 新しい値を決める
        const newValue = prev[index].percentage + makeRandomNum(-30, 31)
        const refinedNewValue = newValue < 0 ? 10 : newValue

        // 新しい割合配列を生成
        const newValues = structuredClone(prevPercentages)
        newValues[index] = refinedNewValue
        const newPercentages = convertToPercentages(newValues)

        return [
          { name: 'a', percentage: newPercentages[0], fillOpacity: 1 },
          { name: 'b', percentage: newPercentages[1], fillOpacity: 0.8 },
          { name: 'c', percentage: newPercentages[2], fillOpacity: 0.6 },
          { name: 'd', percentage: newPercentages[3], fillOpacity: 0.4 },
        ]
      })
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="size-full relative">
      <ResponsiveContainer className="">
        <RCPieChart>
          <Pie
            data={data}
            dataKey="percentage"
            innerRadius="70%"
            outerRadius="90%"
            fill="var(--color-primary)"
            stroke="none"
            paddingAngle={4}
          />
        </RCPieChart>
      </ResponsiveContainer>

      <div
        className={clsx(
          'absolute size-full inset-0',
          'flex justify-center items-center',
        )}
      >
        <FourPercentageGrid
          percentages={
            data.map((record) => record.percentage) as FourPercentages
          }
        />
      </div>
    </div>
  )
}
