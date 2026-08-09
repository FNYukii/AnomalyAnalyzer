import clsx from 'clsx'
import { SatelliteView } from './components/sections/SatelliteView'
import { TopLeftHUD } from './components/sections/TopLeftHUD'
import { TopRightHUD } from './components/sections/TopRightHUD'

export const App = () => {
  return (
    <div className={clsx('w-screen h-screen')}>
      <SatelliteView className="fixed size-full" />

      <div className={clsx('fixed w-full p-1', 'flex justify-between')}>
        <TopLeftHUD />
        <TopRightHUD />
      </div>
    </div>
  )
}
