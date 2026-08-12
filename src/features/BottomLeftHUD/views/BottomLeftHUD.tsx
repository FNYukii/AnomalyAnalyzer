import clsx from 'clsx'
import { DisplayDelay } from '../../common/elements/DisplayDelay'
import { ChartSection } from '../../commonBottomHUD/parts/ChartSection'

export const BottomLeftHUD = () => {
  return (
    <div
      className={clsx(
        'h-full w-fit',
        'grid grid-rows-2 grid-cols-3 gap-y-2 gap-x-3',
      )}
    >
      <DisplayDelay delay={3000}>
        <ChartSection shape="landscape" className="row-start-1 col-start-1" />
      </DisplayDelay>

      <DisplayDelay delay={3200}>
        <ChartSection shape="landscape" className="row-start-2 col-start-1" />
      </DisplayDelay>

      <DisplayDelay delay={3400}>
        <ChartSection shape="landscape" className="row-start-2 col-start-2" />
      </DisplayDelay>

      <DisplayDelay delay={3600}>
        <ChartSection shape="landscape" className="row-start-2 col-start-3" />
      </DisplayDelay>
    </div>
  )
}
