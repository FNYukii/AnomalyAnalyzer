import { ScrollingSatelliteMap } from '../parts/ScrollingSatelliteMap'

type Props = {
  className?: string
}

export const AnomalyMap = ({ className }: Props) => {
  return (
    <div className={className}>
      <ScrollingSatelliteMap />
    </div>
  )
}
