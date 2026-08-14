import clsx from 'clsx'

import { AnomalyMap } from './features/AnomalyMap/views/AnomalyMap'
import { BottomHUD } from './features/BottomHUD/views/BottomHUD'
import { NotificationBarViewer } from './features/Notification/views/NotificationBarViewer'
import { TopLeftHUD } from './features/TopLeftHUD/views/TopLeftHUD'
import { TopRightHUD } from './features/TopRightHUD/views/TopRightHUD'

export const MainScreen = () => {
  return (
    <>
      <AnomalyMap className="fixed size-full" />

      <div
        className={clsx(
          'fixed size-full',
          'flex justify-center items-start pt-16',
        )}
      >
        <NotificationBarViewer />
      </div>

      <div
        className={clsx(
          'fixed size-full p-2',
          'grid grid-rows-[auto_1fr] gap-4',
        )}
      >
        <div className="flex justify-between">
          <TopLeftHUD />
          <TopRightHUD />
        </div>

        <div className="flex flex-col justify-end">
          <BottomHUD />
        </div>
      </div>
    </>
  )
}
