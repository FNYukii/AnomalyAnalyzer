import React, { type ReactElement, useEffect, useState } from 'react'
import clsx from 'clsx'

type Props = {
  // NOTE: ReactElement で単一のReact要素と保証
  children: ReactElement<{ className?: string }>
}

export const FadeIn = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 1フレーム後にコンテンツ表示
    const rendar = () => {
      setIsVisible(true)
    }

    const requestId = requestAnimationFrame(rendar)

    return () => cancelAnimationFrame(requestId)
  }, [])

  return React.cloneElement(children, {
    className: clsx(
      children.props.className,
      'transition duration-500',
      isVisible ? 'opacity-100' : 'opacity-0',
    ),
  })
}
