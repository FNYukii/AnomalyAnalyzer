import { ScrollingSatelliteMap } from '../parts/ScrollingSatelliteMap'
import { RisingMakerMap } from '../parts/RisingMakerMap'

type Props = {
  className?: string
}
export const AnomalyMap = ({ className }: Props) => {
  return (
    <div className={className}>
      <ScrollingSatelliteMap />
      <RisingMakerMap className="fixed inset-0" />
    </div>
  )
}
