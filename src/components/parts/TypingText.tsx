import clsx from 'clsx'
import { useEffect, useState } from 'react'

const DEFAULT_INTERVAL_DELAY = 20

type Props = {
  text: string
  startDelay?: number
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
  startDelay = 0,
  intervalDelay = DEFAULT_INTERVAL_DELAY,
  className,
}: Props) => {
  const [typingText, setTypingText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    // props.textが更新されたら、表示をリセット
    setTypingText('')

    let intervalId: number

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setTypingText((prevText) => {
          if (prevText.length < initialText.length) {
            return prevText + initialText[prevText.length]
          }

          clearInterval(intervalId)
          setIsTyping(false)
          return prevText
        })
      }, intervalDelay)
    }, startDelay)

    // アンマウント時/再実行時にタイマーを停止
    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="relative *:whitespace-pre">
      <p className={clsx('absolute', className)}>
        {isTyping ? typingText : initialText}
      </p>
      <p className={clsx('invisible', className)}>{initialText}</p>
    </div>
  )
}
