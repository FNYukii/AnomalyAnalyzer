import clsx from 'clsx'
import satellitePhoto from '../assets/satellite-photo.png'
import { useRef } from 'react'
import { AutoScroller } from '../elements/AutoScroller'

export const ScrollingSatelliteMap = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <AutoScroller containerRef={containerRef} />

      <div
        ref={containerRef}
        className={clsx('size-full', 'overflow-scroll scrollbar-none')}
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
