import clsx from 'clsx'
import { BarWaveformChart } from '../parts/BarWaveformChart'
import { DisplayDelay } from '../../misc/elements/DisplayDelay'

export const BottomHUD = () => {
  return (
    <div className={clsx('h-full w-fit', 'grid grid-rows-2 gap-4')}>
      <DisplayDelay delay={3000}>
        <section
          className={clsx(
            'aspect-video',
            'border border-primary bg-primary/15',
          )}
        >
          <BarWaveformChart />
        </section>
      </DisplayDelay>

      <DisplayDelay delay={3400}>
        <section
          className={clsx(
            'aspect-video',
            'border border-primary bg-primary/15',
          )}
        >
          <BarWaveformChart />
        </section>
      </DisplayDelay>
    </div>
  )
}
