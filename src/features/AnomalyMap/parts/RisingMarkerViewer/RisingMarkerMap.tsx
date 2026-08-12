import { DisplayDelay } from '../../../common/elements/DisplayDelay'

import { RisingMarkerViewer } from './RisingMarkerViewer'

type Props = {
  className?: string
}

export const RisingMarkerMap = ({ className }: Props) => {
  return (
    <div className={className}>
      <RisingMarkerViewer />
      <RisingMarkerViewer />

      <DisplayDelay delay={10000}>
        <RisingMarkerViewer />
      </DisplayDelay>

      <DisplayDelay delay={20000}>
        <RisingMarkerViewer />
      </DisplayDelay>

      <DisplayDelay delay={30000}>
        <RisingMarkerViewer />
      </DisplayDelay>
    </div>
  )
}
