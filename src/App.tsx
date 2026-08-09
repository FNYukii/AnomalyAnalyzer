import clsx from 'clsx'
import { SatelliteView } from './components/SatelliteView'
import { HUD } from './components/HUD'

export const App = () => {
  return (
    <div className={clsx('w-screen h-screen')}>
      <SatelliteView className="fixed size-full" />
      <HUD className="fixed" />
    </div>
  )
}
