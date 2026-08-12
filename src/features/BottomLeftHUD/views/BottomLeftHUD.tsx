import clsx from 'clsx'
import { DisplayDelay } from '../../common/elements/DisplayDelay'
import { ChartSection } from '../../misc/parts/ChartSection'

export const BottomLeftHUD = () => {
  return (
    <div
      className={clsx(
        'h-full w-fit',
        'grid grid-cols-3 grid-rows-2 gap-y-2 gap-x-3',
      )}
    >
      <DisplayDelay delay={3000}>
        <ChartSection shape="landscape" />
      </DisplayDelay>

      <DisplayDelay delay={3200}>
        <ChartSection shape="landscape" className="col-start-1 row-start-2" />
      </DisplayDelay>

      <DisplayDelay delay={3400}>
        <ChartSection shape="landscape" className="col-start-2 row-start-2" />
      </DisplayDelay>

      <DisplayDelay delay={3600}>
        <ChartSection shape="landscape" className="col-start-3 row-start-2" />
      </DisplayDelay>
    </div>
  )
}
