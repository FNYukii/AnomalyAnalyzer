import { DisplayDelay } from '../../../common/elements/DisplayDelay'

import { RisingMarkerViewer } from './RisingMarkerViewer'

type Props = {
  className?: string
}

export const RisingMarkerMap = ({ className }: Props) => {
  return (
    <div className={className}>
      <DisplayDelay delay={6600}>
        <RisingMarkerViewer />
      </DisplayDelay>

      <DisplayDelay delay={8800}>
        <RisingMarkerViewer />
      </DisplayDelay>

      <DisplayDelay delay={15000}>
        <RisingMarkerViewer />
      </DisplayDelay>

      <DisplayDelay delay={20000}>
        <RisingMarkerViewer />
      </DisplayDelay>

      <DisplayDelay delay={40000}>
        <RisingMarkerViewer />
      </DisplayDelay>
    </div>
  )
}
