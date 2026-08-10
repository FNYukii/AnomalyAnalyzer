import clsx from 'clsx'
import satellitePhoto from '../assets/satellite-photo.png'
import { useRef } from 'react'
import { AutoScroller } from '../elements/AutoScroller'

type Props = {
  className?: string
}

export const SatelliteView = (props: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <AutoScroller containerRef={containerRef} />

      <div
        ref={containerRef}
        className={clsx('overflow-scroll scrollbar-none', props.className)}
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
