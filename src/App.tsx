import clsx from 'clsx'
import { SatelliteView } from './components/parts/SatelliteView'
import { TopLeftHUD } from './components/parts/TopLeftHUD'
import { TopRightHUD } from './components/parts/TopRightHUD'

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
