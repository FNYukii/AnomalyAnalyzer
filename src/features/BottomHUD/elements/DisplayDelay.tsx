import { useEffect, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay: number
}

export const DisplayDelay = (props: Props) => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsShow(true)
    }, props.delay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      {!isShow ? (
        <div className={!isShow && 'invisible'}>{props.children}</div>
      ) : (
        props.children
      )}
    </>
  )
}
