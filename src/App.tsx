import clsx from 'clsx'
import { SatelliteView } from './features/Map/views/SatelliteView'
import { TopLeftHUD } from './features/TopLeftHUD/views/TopLeftHUD'
import { TopRightHUD } from './features/TopRightHUD/views/TopRightHUD'
import { BottomLeftHUD } from './features/BottomLeftHUD/views/BottomLeftHUD'
import { BottomRightHUD } from './features/BottomRightHUD/views/BottomRightHUD'

export const App = () => {
  return (
    <div
      className={clsx(
        'w-screen h-screen',
        'text-primary selection:bg-primary/30 uppercase',
      )}
    >
      <SatelliteView className="fixed size-full" />

      <div className={clsx('fixed size-full p-2', 'flex justify-between')}>
        <div className="grid grid-rows-[auto_1fr] gap-6">
          <TopLeftHUD />
          <BottomLeftHUD />
        </div>

        <div className="grid grid-rows-[auto_1fr] gap-6 align-end">
          <TopRightHUD />
          <BottomRightHUD />
        </div>
      </div>
    </div>
  )
}
