import { useState } from 'react'
import clsx from 'clsx'

import { TypingText } from '../../../common/elements/TypingText'
import { CountingUpText } from '../../../TopRightHUD/elements/CountingUpText'

import { PopUpAndUndo } from './PopUpAndUndo'

type Props = {
  value: number
  greatAnomaly: boolean
}

export const ConcentrationText = ({ value, greatAnomaly }: Props) => {
  const [integerPart, decimalPart] = value.toString().split('.')

  const [isCountUpCompleted, setIsCountUpCompleted] = useState(false)

  const handleOnComplete = () => {
    setIsCountUpCompleted(true)
  }

  return (
    <PopUpAndUndo highlightColor={!greatAnomaly ? 'primary' : 'accent'}>
      <p className="leading-none">
        <CountingUpText
          num={Number(integerPart)}
          intervalDelay={1000 / Number(integerPart)} // 約1秒でカウントアップ完了するように
          onComplete={handleOnComplete}
          className="inline-block text-2xl leading-none"
        />

        {decimalPart !== undefined && (
          <TypingText
            text={`.${decimalPart}`}
            intervalDelay={50}
            className={clsx('inline-block', !isCountUpCompleted && 'invisible')}
          />
        )}
      </p>
    </PopUpAndUndo>
  )
}
