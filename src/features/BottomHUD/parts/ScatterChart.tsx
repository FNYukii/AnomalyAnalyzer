import { useEffect, useState } from 'react'
import {
  ResponsiveContainer,
  Scatter,
  ScatterChart as RCScatterChart,
  XAxis,
  YAxis,
  ZAxis,
} from 'recharts'
import { makeRandomNum } from '../../misc/utils/number'

type Record = {
  x: number
  y: number
  size: number
}

const makeCoordinateRecords = (): Record[] => {
  return [
    {
      x: 5,
      y: 5,
      size: 1,
    },
    {
      x: makeRandomNum(0, 10, 1),
      y: makeRandomNum(0, 10, 1),
      size: 5,
    },
  ]
}

/**
 * 散布図
 *
 * アノマリーエリアにおける各アノマリーの座標,大きさをランダム生成し、表示する
 */
export const ScatterChart = () => {
  const [data, setData] = useState(makeCoordinateRecords())
  const maxDataLength = makeRandomNum(5, 20)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 座標を追加するかどうかは確率で決める
      if (makeRandomNum(0, 10) > 5) return

      setData((prev) => {
        // 座標が増えすぎないように、一定数超えたら止める
        if (prev.length > maxDataLength) {
          clearInterval(intervalId)
          return prev
        }

        return [
          ...prev,
          {
            x: makeRandomNum(0, 10, 1),
            y: makeRandomNum(0, 10, 1),
            size: makeRandomNum(1, 6),
          },
        ]
      })
    }, 4000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <ResponsiveContainer>
      <RCScatterChart>
        <XAxis
          dataKey="x"
          type="number"
          domain={[-1, 11]}
          width={0}
          height={0}
        />
        <YAxis
          dataKey="y"
          type="number"
          domain={[-1, 11]}
          width={0}
          height={0}
        />

        <ZAxis type="number" dataKey="size" range={[2, 200]} />

        <Scatter data={data} fill="var(--color-primary)" />
      </RCScatterChart>
    </ResponsiveContainer>
  )
}
