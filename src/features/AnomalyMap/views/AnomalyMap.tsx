import { DisplayDelay } from '../../common/elements/DisplayDelay'
import { MapHider } from '../parts/MapHider'
import { RisingMarkerMap } from '../parts/RisingMarkerViewer/RisingMarkerMap'
import { ScrollingSatelliteMap } from '../parts/ScrollingSatelliteMap'

type Props = {
  className?: string
}
export const AnomalyMap = ({ className }: Props) => {
  return (
    <div className={className}>
      <ScrollingSatelliteMap />
      <MapHider className="fixed inset-0" />

      <DisplayDelay delay={1000}>
        <RisingMarkerMap className="fixed inset-0" />
      </DisplayDelay>
    </div>
  )
}
