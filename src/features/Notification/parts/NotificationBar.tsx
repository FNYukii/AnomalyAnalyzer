import { useState } from 'react'
import clsx from 'clsx'

import { makeAreaName } from '../../common/utils/areaName'

export const NotificationBar = () => {
  const [areaName] = useState(makeAreaName)

  return (
    <div
      className={clsx(
        'py-3 px-8',
        'text-2xl',
        'border border-primary/50 bg-primary/15',
        'corner-border corner-border-primary',
      )}
    >
      <p>Anomaly detected at {areaName}</p>
    </div>
  )
}
