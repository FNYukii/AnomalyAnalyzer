import { useRef, useEffect } from 'react'

type Props = {
  containerRef: React.RefObject<HTMLDivElement | null>
}

/**
 * @component AutoScroller
 *
 * @description
 * 指定された要素（div等）を自動スクロールさせるコンポーネント
 *
 * 一番下まで到達すれば一番上に戻す,
 * ユーザーによる手動スクロールは無効化される
 *
 * @example
 * <AutoScroller containerRef={containerRef} />
 * <div ref={containerRef} className='overflow-scroll'>
 *  <p>...</p>
 *  <p>......</p>
 *  <p>.........</p>
 * </div>
 */
export const AutoScroller = (props: Props) => {
  const scrollRef = useRef<number | null>(null)

  useEffect(() => {
    const container = props.containerRef.current
    if (container) {
      container.tabIndex = -1
      container.style.pointerEvents = 'none'
    }

    startScroll()

    return () => {
      stopScroll()
    }
  }, [])

  const scroll = () => {
    const container = props.containerRef.current
    if (!container) return

    container.scrollTop += 0.25

    // 一番下までスクロールしたら、上に戻す
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight
    ) {
      container.scrollTop = 0
    }

    // 次のスクロールも予約
    scrollRef.current = requestAnimationFrame(scroll)
  }

  const startScroll = () => {
    // 次回のフレーム更新で関数を実行するよう予約
    scrollRef.current = requestAnimationFrame(scroll)
  }

  const stopScroll = () => {
    if (scrollRef.current) {
      cancelAnimationFrame(scrollRef.current)
    }
  }
  return null
}
