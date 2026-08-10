import { useEffect, useRef } from 'react'

const getRandomNum = (min: number, max: number) => {
  const randomNum = Math.random() * (max - min) + min
  return Math.floor(randomNum * 100) / 100
}

const SPEED = 0.6 // 流れるスピード（px/frame）
const BAR_WIDTH = 1.5 // 各バーの幅（px）
const BAR_GAP = 1 // バー同士の間隔（px）

export const BarWaveformChart = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // キャンバスのサイズを親要素に合わせる （1倍固定）
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width // 親要素の幅をそのまま使用
        canvas.height = rect.height // 親要素の高さをそのまま使用
      }
    }
    resizeCanvas()

    // 設定値取得
    const step = BAR_WIDTH + BAR_GAP
    const maxBarCount = Math.ceil(canvas.width / step) + 5 // 画面幅に必要なバーの数

    // 振幅データ
    const amplitudes: number[] = Array.from({ length: maxBarCount }, () =>
      getRandomNum(0.05, 0.2),
    )

    let frameId: number
    let animationOffsetX = 0 // アニメーション用オフセット

    // 描画関数
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // SPEED分オフセットを増加
      animationOffsetX += SPEED

      // 1バー分（step）移動したら、一番古い要素を消して新しい要素を追加
      if (animationOffsetX >= step) {
        animationOffsetX -= step
        amplitudes.shift()

        // 新しい振幅を生成
        const isSpike = getRandomNum(0, 10) > 9
        const newAmplitude = isSpike
          ? getRandomNum(0.2, 1)
          : getRandomNum(0.05, 0.2)

        amplitudes.push(newAmplitude)
      }

      // 各バーを上下対照に描画
      for (let i = 0; i < amplitudes.length; i++) {
        const amplitude = amplitudes[i]
        const barHeight = amplitude * canvas.height

        const x = i * step - animationOffsetX
        const centerY = canvas.height / 2
        const y = centerY - barHeight / 2

        ctx.fillStyle = '#0ea5e9'
        ctx.fillRect(x, y, BAR_WIDTH, barHeight)
      }

      // 次回の描画を予約
      frameId = requestAnimationFrame(render)
    }

    // 描画関数実行
    render()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    // NOTE: canvasと高さ計算によってaspect-videoが広げられる不具合があったので、relativeで対策
    <div className="relative size-full">
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />
    </div>
  )
}
