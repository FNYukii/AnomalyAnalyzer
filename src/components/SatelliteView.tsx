import clsx from 'clsx'
import satellitePhoto from '../assets/satellite-photo.png'

export const SatelliteView = () => {
  return (
    <img
      src={satellitePhoto}
      alt="衛星写真"
      className={clsx('w-full h-full', 'brightness-40')}
    />
  )
}
