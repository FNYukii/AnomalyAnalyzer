import clsx from 'clsx'

import { AnomalyMap } from './features/AnomalyMap/views/AnomalyMap'
import { BottomHUD } from './features/BottomHUD/views/BottomHUD'
import { DisplayDelay } from './features/common/elements/DisplayDelay'
import { SplashScreen } from './features/SplashScreen/views/SplashScreen'
import { TopLeftHUD } from './features/TopLeftHUD/views/TopLeftHUD'
import { TopRightHUD } from './features/TopRightHUD/views/TopRightHUD'

export const App = () => {
  return (
    <div
      className={clsx(
        'w-full h-screen',
        'text-primary selection:bg-primary/30 uppercase',
      )}
    >
      <DisplayDelay delay={1000}>
        <AnomalyMap className="fixed size-full" />
      </DisplayDelay>

      <DisplayDelay delay={1000}>
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
      </DisplayDelay>

      <SplashScreen className="fixed size-full" />
    </div>
  )
}
