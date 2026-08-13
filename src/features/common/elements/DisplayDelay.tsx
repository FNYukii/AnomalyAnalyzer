import { type ReactNode, useEffect, useState } from 'react'

type Props = {
  children: ReactNode
  delay: number
}

export const DisplayDelay = ({ children, delay }: Props) => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsShow(true)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [delay])

  return (
    <>
      {!isShow ? (
        <div className={!isShow && 'invisible'}>{children}</div>
      ) : (
        children
      )}
    </>
  )
}
