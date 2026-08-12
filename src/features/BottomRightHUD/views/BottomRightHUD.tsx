import clsx from 'clsx'
import { DisplayDelay } from '../../common/elements/DisplayDelay'
import { ChartSection } from '../../commonBottomHUD/parts/ChartSection'

export const BottomRightHUD = () => {
  return (
    <div className={clsx('h-full', 'flex justify-end')}>
      <div className={clsx('grid grid-rows-2 grid-cols-3 gap-y-2 gap-x-3')}>
        <DisplayDelay delay={4400}>
          <ChartSection shape="square" className="row-start-1 col-start-3" />
        </DisplayDelay>

        <DisplayDelay delay={4200}>
          <ChartSection shape="square" className="row-start-2 col-start-3" />
        </DisplayDelay>

        <DisplayDelay delay={4000}>
          <ChartSection shape="square" className="row-start-2 col-start-2" />
        </DisplayDelay>

        <DisplayDelay delay={3800}>
          <ChartSection shape="square" className="row-start-2 col-start-1" />
        </DisplayDelay>
      </div>
    </div>
  )
}
