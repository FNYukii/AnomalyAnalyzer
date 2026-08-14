import { useState } from 'react'
import clsx from 'clsx'

import { makeAreaName } from '../../common/utils/areaName'
import { makeRandomNum } from '../../common/utils/number'

const MESSAGE_TEMPLATES = [
  (area: string) => `Anomaly detected at ${area}`,
  (area: string) => `Vibration detected at ${area}`,
  (area: string) => `Anomalium concentration decreased at ${area}`,
  (area: string) => `Anomalium concentration increased at ${area}`,
] as const

const makeMessage = () => {
  const areaName = makeAreaName()
  const templateIndex = makeRandomNum(0, MESSAGE_TEMPLATES.length)

  return MESSAGE_TEMPLATES[templateIndex](areaName)
}

export const NotificationBar = () => {
  const [message] = useState(makeMessage)

  return (
    <div
      className={clsx(
        'py-3 px-8',
        'text-2xl',
        'border border-primary/50 bg-primary/15',
        'corner-border corner-border-primary',
      )}
    >
      <p>{message}</p>
    </div>
  )
}
