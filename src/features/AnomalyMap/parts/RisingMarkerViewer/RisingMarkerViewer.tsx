import { useEffect, useState } from 'react'
import { makeRandomNum } from '../../../common/utils/number'
import { RisingMarker } from './RisingMarker'

/**
 * 画面下から上へ動くマーカーを、ランダムなx座標で表示する
 *
 * - 表示していたマーカーが上へ到達したら、次のマーカーを表示する
 * - 開始時間や次マーカー表示までの待機時間もランダムに決める
 */
export const RisingMarkerViewer = () => {
  const [markerX, setMarkerX] = useState(makeRandomNum(15, 86))
  const [isViewing, setIsViewing] = useState(false)

  useEffect(() => {
    const delay = makeRandomNum(0, 10001)
    const timeoutId = setTimeout(() => {
      setIsViewing(true)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const handleMarkerReachTheTop = () => {
    setIsViewing(false)

    const delay = makeRandomNum(5000, 100001)
    setTimeout(() => {
      setMarkerX(makeRandomNum(15, 86))
      setIsViewing(true)
    }, delay)
  }

  return (
    isViewing && (
      <RisingMarker
        xPercentage={markerX}
        onReachTheTop={handleMarkerReachTheTop}
      />
    )
  )
}
