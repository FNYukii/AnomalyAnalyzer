import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import { MarkerIcon } from '../elements/MarkerIcon'

const SPEED = 0.25

type Props = {
  xPercentage: number
  onReachTheTop: () => void
}

export const RisingMarker = ({ xPercentage, onReachTheTop }: Props) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // 初期位置は画面の最下部 （見切れないよう要素自身の高さを加算）
    let currentY = window.innerHeight

    let animationFrameId: number

    const render = () => {
      // 毎フレーム 0.25px ずつ上へ移動
      currentY -= SPEED
      element.style.transform = `translate3d(-50%, ${currentY}px, 0)`

      // 要素の高さを含めて完全に見切れるまで、次の描画を予約
      const elementHeight = element.offsetHeight
      if (currentY > -elementHeight) {
        animationFrameId = requestAnimationFrame(render)
      } else {
        onReachTheTop()
      }
    }

    // 描画実行
    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      ref={elementRef}
      className={clsx(
        `fixed top-0`,
        // 'size-4 rounded-full bg-primary animate-pulse',
      )}
      style={{
        left: `${xPercentage}%`,
        transform: 'translate3d(-50%, 100vh, 0)', // NOTE: 初期は画面外へ押し下げておく
      }}
    >
      <MarkerIcon className="size-12" />
    </div>
  )
}
