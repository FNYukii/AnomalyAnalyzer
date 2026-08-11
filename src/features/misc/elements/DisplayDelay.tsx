import { useEffect, useState, type ReactNode } from 'react'

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
  }, [])

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
