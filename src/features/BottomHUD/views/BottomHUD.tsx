import clsx from 'clsx'
import { BarWaveformChart } from '../parts/BarWaveformChart'
import { DisplayDelay } from '../../misc/elements/DisplayDelay'
import { FadeIn } from '../elements/FadeIn'
import { LineChart } from '../parts/LineChart'

type ChartSectionProps = {
  title: string
  variant: 'barWaveform' | 'line'
  displayDelay?: number
  className?: string
}

const ChartSection = ({
  title,
  variant,
  displayDelay,
  className,
}: ChartSectionProps) => {
  return (
    <DisplayDelay delay={displayDelay ?? 0}>
      <FadeIn>
        <section className={clsx('grid grid-rows-[auto_1fr]', className)}>
          <span>{title}</span>

          <div
            className={clsx(
              'aspect-video',
              'border border-primary/50 bg-primary/15',
              'corner-border corner-border-primary',
            )}
          >
            {variant === 'barWaveform' && <BarWaveformChart />}
            {variant === 'line' && <LineChart />}
          </div>
        </section>
      </FadeIn>
    </DisplayDelay>
  )
}

export const BottomHUD = () => {
  return (
    <div
      className={clsx(
        'h-full w-fit',
        'grid grid-rows-2 grid-cols-2 gap-y-2 gap-x-3',
      )}
    >
      <ChartSection title="Silo 4" variant="barWaveform" displayDelay={3000} />

      <ChartSection
        title="Plant 26"
        variant="barWaveform"
        displayDelay={3200}
        className="col-start-1"
      />

      <ChartSection title="District 57" variant="line" displayDelay={3400} />
    </div>
  )
}
