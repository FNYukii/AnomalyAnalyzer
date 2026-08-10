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
          'flex flex-col gap-8 items-between',
        )}
      >
        <div className="flex justify-between">
          <TopLeftHUD />
          <TopRightHUD />
        </div>

        <div className="grow">
          <BottomHUD />
        </div>
      </div>
    </div>
  )
}
