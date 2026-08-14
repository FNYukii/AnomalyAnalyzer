import { type ReactNode, useEffect, useState } from 'react'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  duration?: number
  interval?: number
}

/**
 * 指定した時間要素を点滅させてから表示する
 */
export const Blink = ({ children, duration = 1000, interval = 200 }: Props) => {
  const [isBlinking, setIsBlinking] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsBlinking(false)
    }, duration)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [duration])

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
				
        .animate-blink {
          animation-name: blink;
          animation-timing-function: steps(1);
          animation-iteration-count: infinite;
        }
      `}</style>

      <div
        className={clsx(isBlinking && 'animate-blink')}
        style={isBlinking ? { animationDuration: `${interval}ms` } : undefined}
      >
        {children}
      </div>
    </>
  )
}
