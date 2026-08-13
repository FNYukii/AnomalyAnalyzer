import { useState } from 'react'

import { makeRandomNum } from '../../../common/utils/number'

import { RisingMarker } from './RisingMarker'

const makeX = () => {
  return makeRandomNum(15, 86)
}

const makeY = () => {
  return makeRandomNum(30, 61)
}

/**
 * 画面上端へ動くマーカーを、ランダムなx, y座標で表示する
 *
 * - 表示していたマーカーが上へ到達したら、次のマーカーを表示する
 * - 次マーカー表示までの待機時間はランダムに決める
 */
export const RisingMarkerViewer = () => {
  const [markerX, setMarkerX] = useState(makeX())
  const [markerY, setMarkerY] = useState(makeY())
  const [isViewing, setIsViewing] = useState(true)

  const handleMarkerReachTheTop = () => {
    setIsViewing(false)

    const delay = makeRandomNum(5000, 15001)
    setTimeout(() => {
      setMarkerX(makeX())
      setMarkerY(makeY())

      setIsViewing(true)
    }, delay)
  }

  return (
    isViewing && (
      <RisingMarker
        xPercentage={markerX}
        yPercentage={markerY}
        onReachTheTop={handleMarkerReachTheTop}
      />
    )
  )
}
