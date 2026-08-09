import clsx from 'clsx'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

type Props = {
  className?: string
}

export const HUD = (props: Props) => {
  return (
    <div className={clsx('p-1', props.className)}>
      <section className={clsx('leading-[1.2]')}>
        <p>Inspecter Authenticated</p>
        <p>A.M.I.S ver 1.46.401 loaded</p>
        <p>Anomaly Tracker Enabled</p>
        <p>Satellite Monitoring Activated</p>
        <p>Realtime mapping on</p>
        <p>Measuring anomalium concentration activated</p>
        <p>Dynamic waveform chart on</p>
        <p>Search mode Selected</p>
        <p>All systems online</p>
      </section>

      <section className="mt-8">
        <p>Session ID</p>
        <p className="leading-[1.2]">4092-8891-6791-5798-5014</p>
        <p className="mt-1">User ID</p>
        <p className="leading-[1.2]">8014-5691</p>
      </section>

      <section className="mt-8">
        <p className="opacity-60">Analyze</p>

        <div className={clsx('flex gap-1 items-center')}>
          <p>Search</p>
          <ChevronLeftIcon className="size-5" />
        </div>

        <p className="opacity-60">Track</p>
        <p className="opacity-60">Command</p>
      </section>
    </div>
  )
}
