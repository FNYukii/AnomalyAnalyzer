import { useState } from 'react'
import clsx from 'clsx'

import { CountingUpText } from '../../../TopRightHUD/elements/CountingUpText'

type Props = {
  value: number
}

export const ConcentrationText = ({ value }: Props) => {
  const [integerPart, decimalPart] = value.toString().split('.')

  const [isCountUpCompleted, setIsCountUpCompleted] = useState(false)

  const handleOnComplete = () => {
    setIsCountUpCompleted(true)
  }

  return (
    <p>
      <CountingUpText
        num={Number(integerPart)}
        intervalDelay={1000 / Number(integerPart)} // 表示する数値が大きいほど、interval間隔は小さく
        onComplete={handleOnComplete}
        className="inline-block text-2xl leading-none"
      />

      {decimalPart !== undefined && (
        <span className={clsx(!isCountUpCompleted && 'invisible')}>
          .{decimalPart}
        </span>
      )}
    </p>
  )
}
