import clsx from 'clsx'
import satellitePhoto from '../assets/satellite-photo.png'
import { useRef } from 'react'
import { AutoScroller } from './AutoScroller'

export const SatelliteView = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <AutoScroller containerRef={containerRef} />

      <div
        ref={containerRef}
        className={clsx('w-full h-full', 'overflow-scroll')}
      >
        <img
          src={satellitePhoto}
          alt="衛星写真"
          className={clsx('w-full', 'brightness-30')}
        />
      </div>
    </>
  )
}
