import { ScrollingSatelliteMap } from '../parts/ScrollingSatelliteMap'
import { RisingMarkerMap } from '../parts/RisingMarkerMap'

type Props = {
  className?: string
}
export const AnomalyMap = ({ className }: Props) => {
  return (
    <div className={className}>
      <ScrollingSatelliteMap />
      <RisingMarkerMap className="fixed inset-0" />
    </div>
  )
}
