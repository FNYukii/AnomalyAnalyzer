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

  const [typingCompleted, setTypingCompleted] = useState(false)

  useEffect(() => {
    // props.textが更新されたら、表示をリセット
    setTypingText('')

    let intervalId: number

    intervalId = setInterval(() => {
      setTypingText((prevText) => {
        if (prevText.length < initialText.length) {
          return prevText + initialText[prevText.length]
        }

        clearInterval(intervalId)
        setTypingCompleted(true)
        return prevText
      })
    }, intervalDelay)

    // アンマウント時/再実行時にタイマーを停止
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="relative *:whitespace-pre">
      <p className={clsx('absolute', className)}>
        {/* NOTE: アニメーション後は普通にテキスト更新できるように、initialText を表示 */}
        {!typingCompleted ? typingText : initialText}
      </p>
      <p className={clsx('invisible', className)}>{initialText}</p>
    </div>
  )
}
