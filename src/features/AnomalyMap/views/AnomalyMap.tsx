import { MapHider } from '../parts/MapHider'
import { RisingMarkerMap } from '../parts/RisingMarkerMap/RisingMarkerMap'
import { ScrollingSatelliteMap } from '../parts/ScrollingSatelliteMap'

type Props = {
  className?: string
}

export const AnomalyMap = ({ className }: Props) => {
  return (
    <div className={className}>
      <ScrollingSatelliteMap />
      <MapHider className="fixed inset-0" />

      <RisingMarkerMap className="fixed inset-0" />
    </div>
  )
}
