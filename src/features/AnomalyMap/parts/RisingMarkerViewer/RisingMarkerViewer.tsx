import { useEffect, useRef, useState } from 'react'

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
  const [markerX, setMarkerX] = useState(makeX)
  const [markerY, setMarkerY] = useState(makeY)
  const [isShowing, setIsShowing] = useState(true)

  const timeoutIdRef = useRef<number | null>(null)

  const handleMarkerReachTheTop = () => {
    setIsShowing(false)

    const delay = makeRandomNum(5000, 15001)

    timeoutIdRef.current = setTimeout(() => {
      setMarkerX(makeX())
      setMarkerY(makeY())

      setIsShowing(true)
    }, delay)
  }

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])

  return (
    isShowing && (
      <RisingMarker
        xPercentage={markerX}
        yPercentage={markerY}
        onReachTheTop={handleMarkerReachTheTop}
      />
    )
  )
}
