import clsx from 'clsx'
import { SatelliteView } from './features/Map/views/SatelliteView'
import { TopLeftHUD } from './features/TopLeftHUD/views/TopLeftHUD'
import { TopRightHUD } from './features/TopRightHUD/views/TopRightHUD'
import { BottomHUD } from './features/BottomHUD/views/BottomHUD'

export const App = () => {
  return (
    <div
      className={clsx(
        'w-screen h-screen',
        'text-primary selection:bg-primary/30 uppercase',
      )}
    >
      <SatelliteView className="fixed size-full" />

      <div
        className={clsx(
          'fixed size-full p-2',
          'grid grid-rows-[auto_1fr] gap-6',
        )}
      >
        <div className="flex justify-between">
          <TopLeftHUD />
          <TopRightHUD />
        </div>

        <BottomHUD />
      </div>
    </div>
  )
}
