import clsx from 'clsx'
import { BarWaveformChart } from '../parts/BarWaveformChart'
import { DisplayDelay } from '../../misc/elements/DisplayDelay'
import { FadeIn } from '../elements/FadeIn'

export const BottomHUD = () => {
  return (
    <div className={clsx('h-full w-fit', 'grid grid-rows-2 gap-4')}>
      <DisplayDelay delay={3000}>
        <FadeIn>
          <section
            className={clsx(
              'aspect-video',
              'border border-primary/50 bg-primary/15',
              'corner-border corner-border-primary',
            )}
          >
            <BarWaveformChart />
          </section>
        </FadeIn>
      </DisplayDelay>

      <DisplayDelay delay={3400}>
        <FadeIn>
          <section
            className={clsx(
              'aspect-video',
              'border border-primary/50 bg-primary/15',
              'corner-border corner-border-primary',
            )}
          >
            <BarWaveformChart />
          </section>
        </FadeIn>
      </DisplayDelay>
    </div>
  )
}
