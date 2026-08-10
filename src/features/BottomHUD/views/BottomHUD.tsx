import clsx from 'clsx'
import { BarWaveformChart } from '../parts/BarWaveformChart'

export const BottomHUD = () => {
  return (
    <div className={clsx('h-full w-fit', 'grid grid-rows-2 gap-4')}>
      <section
        className={clsx('aspect-video', 'border border-primary bg-primary/15')}
      >
        <BarWaveformChart />
      </section>

      <section
        className={clsx('aspect-video', 'border border-primary bg-primary/15')}
      >
        <BarWaveformChart />
      </section>
    </div>
  )
}
