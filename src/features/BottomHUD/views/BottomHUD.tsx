import clsx from 'clsx'
import { DisplayDelay } from '../../common/elements/DisplayDelay'
import { ChartSection } from '../../commonBottomHUD/parts/ChartSection'

const LeftHUD = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-y-2 gap-x-3">
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

const RightHUD = () => {
  return (
    <div className="flex justify-end">
      <div className={clsx('grid grid-rows-2 grid-cols-5 gap-y-2 gap-x-3')}>
        <DisplayDelay delay={4800}>
          <ChartSection shape="square" className="row-start-1 col-start-5" />
        </DisplayDelay>

        <DisplayDelay delay={4600}>
          <ChartSection shape="square" className="row-start-2 col-start-5" />
        </DisplayDelay>

        <DisplayDelay delay={4400}>
          <ChartSection shape="square" className="row-start-2 col-start-4" />
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

export const BottomHUD = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-4">
      <LeftHUD />
      <RightHUD />
    </div>
  )
}
