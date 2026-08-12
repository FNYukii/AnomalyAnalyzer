import { useRef, useEffect } from 'react'

const SPEED = 0.25

type Props = {
  containerRef: React.RefObject<HTMLDivElement | null>
}

/**
 * 指定された要素（div等）を自動スクロールさせるコンポーネント
 *
 * 一番下まで到達すれば一番上に戻す,
 * ユーザーによる手動スクロールは無効化される
 */
export const AutoScroller = ({ containerRef }: Props) => {
  // アニメーションフレームのIDを管理
  const animationFrameIdRef = useRef<number | null>(null)

  // 小数点精度を保持する論理スクロール位置を管理
  const scrollPositionRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.tabIndex = -1
      container.style.pointerEvents = 'none'
      scrollPositionRef.current = container.scrollTop
    }

    startScroll()

    return () => {
      stopScroll()
    }
  }, [])

  const scroll = () => {
    const container = containerRef.current
    if (!container) return

    // ref内部で小数点を正しく保持して加算
    scrollPositionRef.current += SPEED
    container.scrollTop = scrollPositionRef.current

    // 一番下までスクロールしたか判定 （1pxの余裕を持たせ誤差吸収）
    if (
      Math.ceil(container.scrollTop + container.clientHeight) >=
      container.scrollHeight - 1
    ) {
      scrollPositionRef.current = 0
      container.scrollTop = 0
    }

    // 次のスクロールも予約
    animationFrameIdRef.current = requestAnimationFrame(scroll)
  }

  const startScroll = () => {
    animationFrameIdRef.current = requestAnimationFrame(scroll)
  }

  const stopScroll = () => {
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current)
    }
  }

  return null
}
