import clsx from 'clsx'
import { TopLeftHUD } from './features/TopLeftHUD/views/TopLeftHUD'
import { TopRightHUD } from './features/TopRightHUD/views/TopRightHUD'
import { BottomHUD } from './features/BottomHUD/views/BottomHUD'
import { AnomalyMap } from './features/AnomalyMap/views/AnomalyMap'

export const App = () => {
  return (
    <div
      className={clsx(
        'w-full h-screen',
        'text-primary selection:bg-primary/30 uppercase',
      )}
    >
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
    </div>
  )
}
