import clsx from 'clsx'
import { SatelliteView } from './features/Map/views/SatelliteView'
import { TopLeftHUD } from './features/TopLeftHUD/views/TopLeftHUD'
import { TopRightHUD } from './features/TopRightHUD/views/TopRightHUD'

export const App = () => {
  return (
    <div className={clsx('w-screen h-screen')}>
      <SatelliteView className="fixed size-full" />

      <div className={clsx('fixed w-full p-2', 'flex justify-between')}>
        <TopLeftHUD />
        <TopRightHUD />
      </div>
    </div>
  )
}
