import { makeRandomNum } from '../../common/utils/number'
import { RisingMarker } from './RisingMarker'

type Props = {
  className?: string
}

export const RisingMarkerMap = ({ className }: Props) => {
  const xPercentage = makeRandomNum(15, 86)

  return (
    <div className={className}>
      <RisingMarker xPercentage={xPercentage} />
    </div>
  )
}
