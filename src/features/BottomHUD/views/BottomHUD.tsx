import clsx from 'clsx'
import { BarWaveformChart } from '../parts/BarWaveformChart'
import { DisplayDelay } from '../../misc/elements/DisplayDelay'
import { FadeIn } from '../elements/FadeIn'

export const BottomHUD = () => {
  return (
    <div className={clsx('h-full', 'grid grid-rows-2 gap-2')}>
      <DisplayDelay delay={3000}>
        <FadeIn>
          <section className="grid grid-rows-[auto_1fr] w-fit">
            <span>Silo 4</span>

            <div
              className={clsx(
                'aspect-video',
                'border border-primary/50 bg-primary/15',
                'corner-border corner-border-primary',
              )}
            >
              <BarWaveformChart />
            </div>
          </section>
        </FadeIn>
      </DisplayDelay>

      <DisplayDelay delay={3000}>
        <FadeIn>
          <section className="grid grid-rows-[auto_1fr] w-fit">
            <span>Plant 20</span>

            <div
              className={clsx(
                'aspect-video',
                'border border-primary/50 bg-primary/15',
                'corner-border corner-border-primary',
              )}
            >
              <BarWaveformChart />
            </div>
          </section>
        </FadeIn>
      </DisplayDelay>
    </div>
  )
}
