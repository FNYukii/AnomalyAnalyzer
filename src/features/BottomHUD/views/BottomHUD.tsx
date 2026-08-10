import clsx from 'clsx'
import { BarWaveformChart } from '../parts/BarWaveformChart'

export const BottomHUD = () => {
  return (
    <div className="h-full flex">
      <section
        className={clsx(
          'h-full aspect-video',
          'border border-primary bg-primary/10',
        )}
      >
        <BarWaveformChart />
      </section>
    </div>
  )
}
