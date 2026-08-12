import { useEffect, useState } from 'react'
import clsx from 'clsx'

import { TypingText } from '../../common/elements/TypingText'

type Props = {
  className?: string
}

export const SplashScreen = ({ className }: Props) => {
  const [isShow, setIsShow] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsShow(false)
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    isShow && (
      <div
        className={clsx(
          'bg-black',
          'flex justify-center items-center',
          className,
        )}
      >
        <section className="text-center pb-20">
          <TypingText
            text="A.A.M.S"
            intervalDelay={2}
            className="text-5xl italic inline"
          />

          <TypingText
            text="The Anomaly Analysis and Monitoring System"
            intervalDelay={2}
            className="mt-1 normal-case-"
          />
        </section>
      </div>
    )
  )
}
