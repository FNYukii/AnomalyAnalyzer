import clsx from 'clsx'
import { useEffect, useState } from 'react'

const DEFAULT_INTERVAL_DELAY = 20

type Props = {
  text: string
  startDelay?: number
  intervalDelay?: number
  className?: string
}

export const TypingText = ({
  text: initialText,
  startDelay = 0,
  intervalDelay = DEFAULT_INTERVAL_DELAY,
  className,
}: Props) => {
  const [typingText, setTypingText] = useState('')

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
          return prevText
        })
      }, intervalDelay)
    }, startDelay)

    // アンマウント時/再実行時にタイマーを停止
    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [initialText])

  return <p className={clsx('whitespace-pre', className)}>{typingText}</p>
}
