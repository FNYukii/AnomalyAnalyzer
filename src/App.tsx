import clsx from 'clsx'
import { SatelliteView } from './components/SatelliteView'

export const App = () => {
  return (
    <div className={clsx('w-screen h-screen', 'border border-red-500')}>
      {/* <h1>Cyber Charts</h1> */}
      <SatelliteView />
    </div>
  )
}
