import { useEffect, useState } from 'react'
import clsx from 'clsx'

import { AnomalyMap } from './features/AnomalyMap/views/AnomalyMap'
import { BottomHUD } from './features/BottomHUD/views/BottomHUD'
import { SplashScreen } from './features/SplashScreen/views/SplashScreen'
import { TopLeftHUD } from './features/TopLeftHUD/views/TopLeftHUD'
import { TopRightHUD } from './features/TopRightHUD/views/TopRightHUD'

export const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div
      className={clsx(
        'w-full h-screen',
        'text-primary selection:bg-primary/30 uppercase',
      )}
    >
      {!isLoaded && <SplashScreen className="size-full" />}

      {isLoaded && (
        <>
          <AnomalyMap className="fixed size-full" />

          <div
            className={clsx(
              'fixed size-full p-2',
              'grid grid-rows-[auto_1fr] gap-4',
            )}
          >
            <div className="flex justify-between">
              <TopLeftHUD />
              <TopRightHUD />
            </div>

            <div className="flex flex-col justify-end">
              <BottomHUD />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
