import { useEffect, useState } from 'react'
import clsx from 'clsx'

const DEFAULT_INTERVAL_DELAY = 20

type Props = {
  text: string
  intervalDelay?: number
  className?: string
}

/**
 * タイピングアニメーションを再生しながら文字列を表示する
 *
 * - アニメーション中も最終的な表示領域が確保される
 * - アニメーションはマウント時しか再生されない。textが更新された場合はアニメーション無しで置き換えられる
 */
export const TypingText = ({
  text: initialText,
  intervalDelay = DEFAULT_INTERVAL_DELAY,
  className,
}: Props) => {
  const [typingText, setTypingText] = useState('')

  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypingText((prevText) => {
        if (prevText.length < initialText.length) {
          return prevText + initialText[prevText.length]
        }

        clearInterval(intervalId)
        setIsCompleted(true)
        return prevText
      })
    }, intervalDelay)

    // アンマウント時/再実行時にタイマーを停止
    return () => {
      clearInterval(intervalId)
    }
  }, [initialText, intervalDelay])

  return !isCompleted ? (
    <div className={clsx('relative *:whitespace-pre', className)}>
      <p className="absolute">{typingText}</p>
      <p className="invisible">{initialText}</p>
    </div>
  ) : (
    <p className={clsx('whitespace-pre', className)}>{initialText}</p>
  )
}
