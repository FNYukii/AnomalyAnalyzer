import { useEffect, useState } from 'react'
import clsx from 'clsx'

import { DisplayDelay } from '../../common/elements/DisplayDelay'
import { TypingText } from '../../common/elements/TypingText'
import { makeTrueByPercentage } from '../../common/utils/boolean'
import { makeRandomNum } from '../../common/utils/number'
import { CountingUpSlider } from '../elements/CountingUpSlider'
import { CountingUpText } from '../elements/CountingUpText'

const MAX_AREA_LEVEL = 7

export const LevelSection = () => {
  const [level, setLevel] = useState(() => makeRandomNum(1, 5)) // 1 ~ 4

  // 一定間隔ごとに一定確率で level を 1~2 段階変化させる
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLevel((prev) => {
        const isChange = makeTrueByPercentage(30)
        if (!isChange) return prev

        const isLevelUp = makeTrueByPercentage(50)
        if (isLevelUp) {
          const newLevel = prev + makeRandomNum(1, 2) // 0,1
          return newLevel > 7 ? 7 : newLevel
        }

        const newLevel = prev - makeRandomNum(1, 3) // 0,1,2
        return newLevel < 1 ? 1 : newLevel
      })
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <section className="mt-8 mr-4 flex gap-3">
      <div className="flex flex-col items-end">
        <DisplayDelay delay={5600}>
          <TypingText
            text={`Alert\nlevel`}
            className={clsx(
              'leading-none text-left text-2xl',
              level === 7 && 'text-accent',
            )}
          />
        </DisplayDelay>

        <DisplayDelay delay={6000}>
          <CountingUpText
            num={level}
            duration={(level / 4) * 1000} // NOTE:levelが大きければその分時間かけて表示 (2なら0.5秒、4なら1秒)
            className={clsx('mt-2 text-6xl h-13', level === 7 && 'text-accent')}
          />
        </DisplayDelay>
      </div>

      <DisplayDelay delay={6000}>
        <CountingUpSlider
          percentage={(level / MAX_AREA_LEVEL) * 100}
          color={level === 7 ? 'accent' : 'primary'}
        />
      </DisplayDelay>
    </section>
  )
}
