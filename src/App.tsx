import clsx from 'clsx'
import { SatelliteView } from './components/sections/SatelliteView'
import { HUD } from './components/sections/HUD'

export const App = () => {
  return (
    <div className={clsx('w-screen h-screen')}>
      <SatelliteView className="fixed size-full" />
      <HUD className="fixed" />
    </div>
  )
}
